enum UserRole {
  Admin = "Admin",
  User = "User",
  Guest = "Guest",
}

function getRoleMessage(role: UserRole): string {
  switch (role) {
    case "Admin":
      return "Welcome, Admin! You have full access to the system.";
    case "User":
      return "Welcome, User! You have limited access to the system.";
    case "Guest":
      return "Welcome, Guest! Please sign up to access more features.";
    default:
      return "Role not recognized.";
  }
}

getRoleMessage(UserRole.Admin);
