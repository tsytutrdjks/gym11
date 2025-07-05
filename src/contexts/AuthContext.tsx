import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, googleProvider, db } from '../config/firebase';
import toast from 'react-hot-toast';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client';
  avatar?: string;
  subscriptionStatus?: 'active' | 'inactive' | 'expired';
  subscriptionPlan?: string;
  joinDate?: string;
  phone?: string;
  age?: number;
  weight?: number;
  height?: number;
  goal?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await loadUserData(firebaseUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const loadUserData = async (firebaseUser: FirebaseUser) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser({
          id: firebaseUser.uid,
          name: userData.name || firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          role: userData.role || 'client',
          avatar: userData.avatar || firebaseUser.photoURL || '',
          subscriptionStatus: userData.subscriptionStatus || 'inactive',
          subscriptionPlan: userData.subscriptionPlan,
          joinDate: userData.joinDate,
          phone: userData.phone,
          age: userData.age,
          weight: userData.weight,
          height: userData.height,
          goal: userData.goal
        });
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      toast.error('خطأ في تحميل بيانات المستخدم');
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('تم تسجيل الدخول بنجاح');
      return true;
    } catch (error: any) {
      console.error('Login error:', error);
      toast.error('خطأ في تسجيل الدخول');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        // Create new user document
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          name: firebaseUser.displayName || '',
          email: firebaseUser.email || '',
          role: 'client',
          avatar: firebaseUser.photoURL || '',
          subscriptionStatus: 'inactive',
          joinDate: new Date().toISOString().split('T')[0],
          createdAt: new Date()
        });
      }
      
      toast.success('تم تسجيل الدخول بنجاح');
      return true;
    } catch (error: any) {
      console.error('Google login error:', error);
      toast.error('خطأ في تسجيل الدخول بـ Google');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true);
      const result = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const firebaseUser = result.user;
      
      // Save user data to Firestore
      await setDoc(doc(db, 'users', firebaseUser.uid), {
        name: userData.name,
        email: userData.email,
        role: 'client',
        subscriptionStatus: 'inactive',
        joinDate: new Date().toISOString().split('T')[0],
        phone: userData.phone,
        age: parseInt(userData.age),
        weight: parseInt(userData.weight),
        height: parseInt(userData.height),
        goal: userData.goal,
        createdAt: new Date()
      });
      
      toast.success('تم إنشاء الحساب بنجاح');
      return true;
    } catch (error: any) {
      console.error('Registration error:', error);
      toast.error('خطأ في إنشاء الحساب');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('تم تسجيل الخروج بنجاح');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('خطأ في تسجيل الخروج');
    }
  };

  const value: AuthContextType = {
    user,
    login,
    loginWithGoogle,
    register,
    logout,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};