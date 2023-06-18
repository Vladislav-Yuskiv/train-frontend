import React, { useState } from 'react';
import { createAdmin } from "../../services/api/adminsAPI";
import s from "./CreateAdmin.module.css"

const CreateAdmin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   const handleSubmit = async  (e) => {
    e.preventDefault();

    const admin = createAdmin({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input className={s.input} type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label className={s.label}>
        Email:
        <input className={s.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label className={s.label}>
        Password:
        <input className={s.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <button className={s.button} type="submit">Create Admin</button>
    </form>
  );
};

export default CreateAdmin;
