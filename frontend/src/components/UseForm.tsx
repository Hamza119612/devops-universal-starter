// src/components/UserForm.tsx
import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface UserFormProps {
  onUserAdded: () => void;
}

interface UserFormData {
  name: string;
  email: string;
  password: string;
}

const UserForm: React.FC<UserFormProps> = ({ onUserAdded }) => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/users', formData);
      setFormData({ name: '', email: '', password: '' });
      onUserAdded();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
