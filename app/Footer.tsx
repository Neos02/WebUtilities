const Footer = () => {
  return (
    <footer className="container py-6 border-t">
      <p className="text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Web Utilities. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
