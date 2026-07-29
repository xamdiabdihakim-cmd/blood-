import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout, getAccessToken } from '../auth';
import { UserPlus, LogOut, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ContactForm() {
  const [needsAuth, setNeedsAuth] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bloodGroup: ''
  });

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser, token) => {
        setUser(currentUser);
        setNeedsAuth(false);
      },
      () => {
        setNeedsAuth(true);
        setUser(null);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const result = await googleSignIn();
      if (result) {
        setUser(result.user);
        setNeedsAuth(false);
      }
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    setNeedsAuth(true);
    setUser(null);
    setSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Explicit user confirmation for creating contact in their personal Google account
    const confirmed = window.confirm(
      `Do you want to create a contact for ${formData.firstName} ${formData.lastName} in your Google Account?`
    );
    if (!confirmed) return;

    setIsSubmitting(true);
    setSuccess(false);

    try {
      const token = await getAccessToken();
      if (!token) throw new Error('Not authenticated');

      const body = {
        names: [
          {
            givenName: formData.firstName,
            familyName: formData.lastName
          }
        ],
        emailAddresses: formData.email ? [
          {
            value: formData.email,
            type: 'home'
          }
        ] : undefined,
        phoneNumbers: formData.phone ? [
          {
            value: formData.phone,
            type: 'mobile'
          }
        ] : undefined,
        organizations: formData.bloodGroup ? [
          {
            name: `Blood Group: ${formData.bloodGroup}`,
            type: 'other'
          }
        ] : undefined
      };

      const res = await fetch('https://people.googleapis.com/v1/people:createContact', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || 'Failed to create contact');
      }

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        bloodGroup: ''
      });
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error creating contact:', err);
      alert('Failed to create contact. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (needsAuth) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-700 text-center max-w-lg mx-auto">
        <UserPlus className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Connect Google Contacts</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-8">
          Sign in with your Google account to enable saving blood donors directly to your personal contacts.
        </p>
        
        <button 
          onClick={handleLogin} 
          disabled={isLoggingIn}
          className="gsi-material-button mx-auto flex items-center justify-center bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 font-medium px-4 py-3 rounded shadow-sm disabled:opacity-50 transition-colors w-full sm:w-auto"
        >
          <div className="flex items-center gap-3">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>
            <span>{isLoggingIn ? 'Signing in...' : 'Sign in with Google'}</span>
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100 dark:border-slate-700">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Save a Donor</h3>
          <p className="text-sm text-slate-500 mt-1">Signed in as {user?.email}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="text-slate-500 hover:text-red-500 transition-colors p-2"
          aria-label="Sign out"
        >
          <LogOut size={20} />
        </button>
      </div>

      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 p-4 rounded-xl mb-6 flex items-center gap-3 border border-emerald-200 dark:border-emerald-800/50"
          >
            <CheckCircle2 className="flex-shrink-0" />
            <span className="font-medium">Contact successfully added to your Google Account!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">First Name *</label>
            <input 
              type="text" 
              name="firstName" 
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow"
              placeholder="Jane"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Blood Group</label>
          <select 
            name="bloodGroup" 
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white transition-shadow appearance-none"
          >
            <option value="">Select a blood group...</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            disabled={isSubmitting || !formData.firstName}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:shadow-none"
          >
            <UserPlus size={20} />
            {isSubmitting ? 'Saving to Contacts...' : 'Save to Google Contacts'}
          </button>
        </div>
      </form>
    </div>
  );
}
