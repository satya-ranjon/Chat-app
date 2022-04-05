import React, { useEffect, useState } from "react";

export function AuthProvider() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {}, []);

  // signup function
  async function signup() {
    const auth = getAuth();
  }
  return <div>AuthProvider</div>;
}
