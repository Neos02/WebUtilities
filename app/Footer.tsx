const Footer = () => {
  return (
    <footer className="w-full py-6 border-t">
      <div className="container">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Web Utilities. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
