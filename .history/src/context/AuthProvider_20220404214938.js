import React, { useEffect, useState } from "react";

export function AuthProvider() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {}, []);
  return <div>AuthProvider</div>;
}
