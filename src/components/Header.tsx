const Header = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center cursor-pointer" onClick={handleRefresh}>
        <img 
          src="/avatar.jpg" 
          alt="头像" 
          className="w-12 h-12 rounded-full"
        />
        <h1 className="ml-2 text-xl font-bold">
          阿星火种计划
        </h1>
      </div>
      
      {/* ... existing code ... */}
    </header>
  );
};

export default Header; 