import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">王学长</h1>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">关于我</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">技能</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">联系</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                王学长
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                10年+互联网广告投放经验<br/>
                成人教育赛道投放专家<br/>
                AI破局行动家
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  联系我
                </a>
                <a
                  href="#about"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-full font-medium transition-colors"
                >
                  了解更多
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full p-2 shadow-2xl">
                  <Image
                    src="/images/avatar.jpg"
                    alt="王学长头像"
                    width={300}
                    height={300}
                    className="rounded-full w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">10+</div>
                    <div className="text-sm text-gray-300">年经验</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-16">关于我</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-white mb-6">专业背景</h4>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  拥有10年+互联网广告投放经验，专注于成人教育赛道教育产品的投放管理。
                </p>
                <p>
                  目前担任成人兴趣培训投放经理，致力于获取优质付费用户，提升ROI。
                </p>
                <p>
                  曾担任互联网营销讲师，为数十家大学院校讲授互联网营销相关课程。
                </p>
                <p>
                  作为AI破局行动家，深耕AI智能体方向，探索人工智能在营销领域的创新应用。
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 p-8 rounded-2xl text-white shadow-2xl border border-blue-500/20">
              <h4 className="text-2xl font-semibold mb-6">核心优势</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  深度理解成人教育市场
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  精通多平台投放策略
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  丰富的教学培训经验
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  AI技术创新应用
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-16">专业技能</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
              <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">平台投放</h4>
              <p className="text-gray-300 mb-4">
                熟知抖音、腾讯朋友圈、百度等平台投放逻辑
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 抖音短视频带货全流程</li>
                <li>• 随心推微付费策略</li>
                <li>• 千川投放技能</li>
              </ul>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
              <div className="w-12 h-12 bg-green-600/20 border border-green-500/30 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">教学培训</h4>
              <p className="text-gray-300 mb-4">
                具备良好的表达能力和知识传授能力
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• 数十家大学院校讲师经验</li>
                <li>• 互联网营销课程设计</li>
                <li>• 专业知识体系构建</li>
              </ul>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-700 hover:border-gray-600">
              <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">AI智能体</h4>
              <p className="text-gray-300 mb-4">
                AI智能体的开发与应用
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• AI技术创新应用</li>
                <li>• 智能营销解决方案</li>
                <li>• 自动化工具开发</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-16">联系方式</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">微信联系</h4>
                <p className="text-gray-300 mb-4">微信号：wangxuezhang555</p>
                <p className="text-sm text-gray-400">
                  扫描右侧二维码添加微信，或直接搜索微信号
                </p>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4">公众号</h4>
                <a
                  href="https://mp.weixin.qq.com/s/c6GMucNQld4QdZkfrWrqfA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  点击访问我的公众号
                </a>
                <p className="text-sm text-gray-400 mt-2">
                  获取最新的互联网营销和AI智能体相关内容
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-4 text-center">微信二维码</h4>
                <Image
                  src="/images/wechat-qr.jpg"
                  alt="微信二维码"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-400 text-center mt-4">
                  扫码添加微信
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-4">王学长</h4>
          <p className="text-gray-300 mb-6">
            专注成人教育投放 · AI智能体专家 · 互联网营销讲师
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://mp.weixin.qq.com/s/c6GMucNQld4QdZkfrWrqfA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              公众号
            </a>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">微信：wangxuezhang555</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm">
            © 2024 王学长个人主页. 专业 · 创新 · 共赢
          </div>
        </div>
      </footer>
    </div>
  );
}
