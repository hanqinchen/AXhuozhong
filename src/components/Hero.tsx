const Hero = () => {
  return (
    <div className="text-center py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      {/* 主标题 */}
      <h1 className="text-4xl font-bold mb-6">
        用爱点亮这颗星球
      </h1>
      
      {/* 副标题组 */}
      <div className="space-y-4 mb-12 text-gray-700">
        <p className="text-xl">传播正心正念正能量</p>
        <div className="space-y-2">
          <p>让美好持续发生</p>
          <p>所有遇见都是最好的安排</p>
        </div>
      </div>
      
      {/* 理念宣言 */}
      <div className="max-w-2xl mx-auto space-y-6 text-gray-600 border-t border-gray-200 pt-8">
        <div>
          <p className="font-medium mb-2">为自觉故</p>
          <p className="text-sm">具赋勇气在真理面前撕下所有伪装面具</p>
        </div>
        <div>
          <p className="font-medium mb-2">为利他故</p>
          <p className="text-sm">毫无畏惧在裟婆面前戴上任何所需面具</p>
        </div>
      </div>
      
      {/* 行动按钮 */}
      <div className="mt-12">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
          立即加入
        </button>
      </div>
    </div>
  );
};

export default Hero; 