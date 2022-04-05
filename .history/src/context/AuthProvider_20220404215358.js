import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function AuthProvider() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {}, []);

  // signup function
  async function signup() {
       const auth = getAuth();
       await 
  }
  return <div>AuthProvider</div>;
}
