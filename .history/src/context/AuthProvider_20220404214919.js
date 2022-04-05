import React, { useState } from "react";

export function AuthProvider() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  return <div>AuthProvider</div>;
}
