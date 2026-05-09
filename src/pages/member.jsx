import Profile1 from '../assets/member/profile1.jpeg';
import Profile2 from '../assets/member/profile2.jpeg';
import Profile3 from '../assets/member/profile3.jpeg';
import Profile4 from '../assets/member/profile4.jpeg';
import Profile5 from '../assets/member/profile5.jpeg';
import Profile6 from '../assets/member/profile6.jpeg';
import Profile7 from '../assets/member/profile7.jpeg';
import Profile8 from '../assets/member/profile8.jpeg';
import Profile9 from '../assets/member/profile9.jpeg';
import Profile10 from '../assets/member/profile10.jpeg';
import Profile11 from '../assets/member/profile11.jpeg';
import { SiFacebook, SiInstagram,SiX} from '@icons-pack/react-simple-icons';
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Member() {
  const Breadcrumb = () => {
    return (
      <nav className="flex items-center space-x-2 text-gray-500 text-sm my-4">
        <a href="/" className="hover:text-gray-700">ホーム</a>
        <span className="text-gray-400">/</span>
        <a href="/#/member" className="hover:text-gray-700">幹事メンバー紹介</a>
      </nav>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
             <div className="w-[90%] mx-auto mt-12">
        <Breadcrumb />
      </div>
      <h1 className="text-4xl font-bold mb-4 ">幹事メンバー紹介</h1>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-[90%] mx-auto">
        {[
          {
            name: '鶴岡 秀士',
            role: '幹事長',
            introduction: '早稲田大学データサイエンス研究室（後藤研究室）に所属。2024年度よりBeyond 2020 NEXT PROJECTメンバー。2025年度より現職。これまで、同団体では人と活動することをテーマとしたイベント「1人ではできないことを達成するには?　－人を動かす起業の要諦－」や、遊びの視点からキャリアを見つめなおすイベント「キャリア形成にこそ必要な“遊び”とは？」の実行委員長を務めた。現在は、データ分析を起点としたビジネス上の意思決定に強い関心を持ち、実社会に価値をもたらすデータサイエンティストを目指して日々経験を積んでいる。',
            image: Profile1,
            facebook: "https://www.facebook.com/profile.php?id=100058251858947",
            school:"早稲田大学 創造理工学部 経営システム工学科 4年"
          },
          {
            name: '中島 真理子',
            role: '副幹事長',
            introduction: '小学校教員を志し、早稲田大学教育学部教育学科初等教育学専攻に進学。本年度より教育方法・学級経営を専門領域とするゼミに所属。また、公立小学校の学習支援ボランティアや、高校生の探究学習や短期留学を支援する教育系NPOでの活動を通し、国内外の様々な視点で教育を学んでいる。Beyond 2020 NEXT PROJECTには2023年度から参加し、2024年度に広報、2025年度に事務局長を務めた後、現職。また、国連を支える世界子ども未来会議PJ学生リーダーを務める。',
            image: Profile2,
            facebook: "https://www.facebook.com/profile.php?id=100089589111219",
            school:"早稲田大学 教育学部 教育学科 初等教育学専攻 3年"
          },
          {
            name: '久米川 夏穂',
            role: '事務局長',
            introduction: '2023年度よりBeyond 2020 NEXT PROJECT幹事メンバー。これまでに同団体にて、「自分の強みを活かすリーダーシップとは？-リーダーを支える側からその在り方を探る-」「-学校生活をデザインする-なんとなくの毎日から抜け出すためには？」などで実行委員長を務める。また、国連を支える世界子ども未来会議PJでは、学生スタッフとしてNY国連本部を訪問する。昨年秋よりイギリスに1年間留学し、社会学を専攻。ベルリンで開催された、日本文化を再解釈し創造へとつなげる展示会「守破離」に運営として携わる。',
            facebook:"https://www.facebook.com/profile.php?id=100084273409836",
            instagram:"https://www.instagram.com/kaho_black_swan",
            image:Profile3,
            school:"早稲田大学 国際教養学部 3年"
          },
          {
            name: "本田 瑛大",
            role: "オペレーション",
            introduction: "同志社大学に所属。2024年度よりBeyond 2020 NEXT PROJECT幹事を務める。「感じてみようアントレプレナーシップ愛知」の実行委員長。高校時代は「トビタテ留学JAPAN！」「AIG高校生外交官」等を通じて知事に表敬訪問をし、探究などから『常識を覆す選択と挑戦』を体現し、自身の『人生に彩り』をくわえてきた。大学時代は「Rising Global Leaders」に選抜され、アテネやニューヨーク「Concordia Summit」にて首脳や大使、大主教閣下、ヘクトコーン創業者と対談し、自身が手がける複数の事業成長や公益、次世代育成に貢献してきた。",
            image: Profile4,
            facebook:"https://www.facebook.com/share/1ChkmqEqjA/?mibextid=wwXIfr",
            instagram:"https://www.instagram.com/akito.honda.official?igsh=MTlhdGJ0cmo2c2s3Yw%3D%3D&utm_source=qr",
            school:"同志社大学 社会学部 教育文化学科 2年"
          },
          {
            name: "山﨑 花菜",
            role: "オペレーション",
            introduction: "アメリカの高校から早稲田大学国際教養学部に進学。大学では国際関係と教育を主に学んでいる。2025年度よりBeyond 2020 NEXT PROJECTメンバー、2026年度より現職。現在は教育ベンチャーでインターンをしている。こどもや国際分野への関心を持ちながら、NPO団体でのインターンやボランティアへの参加を通して学びを深めている。",
            image: Profile5,
            facebook:"https://www.facebook.com/share/1EFrK9JhPe/?mibextid=wwXIfr",
            instagram:"https://www.instagram.com/_hana.3787_?igsh=MXM4bmUyNmQxdWl2Mg%3D%3D&utm_source=qr",
            school:"早稲田大学 国際教養学部 2年生"
          },
          {
            name: "星名 優一朗",
            role: "オペレーション",
            introduction: "2024年度からBeyond 2020 NEXT PROJECTのメンバー。トビタテ留学JAPAN！高校８期生としてカナダ・トロントに「華道」をテーマに留学。2023年からメディア・リテラシー養成の教材制作に携わる。高校の公民科教員を志しており、体験型主権者教育に関心を持つ。",
            image: Profile6,
            facebook:"https://www.facebook.com/share/1EGCJrikKM/?mibextid=wwXIfr",
            instagram:"https://www.instagram.com/star_name_070518?igsh=bnp6Nm45cjh5dDJl&utm_source=qr",
            school:"明治学院大学 法学部 政治学科 1年"
          },
          {
            name: "中路 梨里",
            role: "オペレーション",
            introduction: "Beyond 2020 NEXT PROJECTには2023年度に中学3年生として参加し、2026年度からは幹事として活動。主に世界こども未来国連やイベントの実行委員として参加。社会保障、とりわけ生活保護法に強い関心を持ち、現在は課題研究として探究を進めている。また、アメリカ留学での経験を活かし、活動に貢献していきたいと考えている。",
            image: Profile7,
            facebook:"https://www.facebook.com/share/1D8wrETRXh/?mibextid=wwXIfr",
            instagram: "https://www.instagram.com/1.__27y?igsh=bWMxcXdrMmg3dDVo&utm_source=qr",
            school:"東京学芸大学附属国際中等教育学校 3年"
          },
          {
            name: "松本綾香",
            role: "マーケティング",
            introduction: "早稲田大学生物物性科学研究室 (朝日研究室) に所属。専門は物理化学、キラル科学、結晶光学。現在、早稲田大学本庄高等学院で非常勤講師を務める。アントレプレナーシップの養成をミッションに掲げる学生団体Beyond 2020 NEXT PROJECTに2020年度から参加し、2022年度に総務、2023年度からは事務局長を務めたのち、2025年度より幹事長を務める。国連を支える世界こども未来会議PJ、SDGs教育カリキュラムPJ、アントレプレナーシップ教育PJメンバー。",
            image: Profile8,
            site:"https://asahi-lab.jp/member/student/2023/matsumoto.html",
            facebook:"https://www.facebook.com/share/1HvHwp96Rv/?mibextid=wwXIfr",
            school:"早稲田大学大学院 先進理工学研究科 先進理工学専攻 一貫制博士課程 3年"
          },
          {
            name: "田上 睦己",
            role: "マーケティング",
            introduction: "高校時代の部活動の怪我の経験から2024年東洋大学健康スポーツ科学部健康スポーツ科学科に入学。今年度からスポーツバイオメカニクスゼミに所属し、ソフトテニスの動作分析をテーマに研究予定。2024年度からBeyond2020NEXTPROJECTに所属、2026年度より現職。また、2025年4月よりスポーツ学生と企業をつなぐ株式会社S-Careerにて長期インターンで1年間広報・営業を担当した。2025年に学生団体「Share×share」を共同立ち上げし、主に広報を担当している。",
            image: Profile9,
            linkedin:"https://www.linkedin.com/in/%E7%9D%A6%E5%B7%B1-%E7%94%B0%E4%B8%8A-605277367?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
            facebook:"https://www.facebook.com/share/1D2jsLi6wj/?mibextid=wwXIfr",
            school:"東洋大学 健康スポーツ科学部 健康スポーツ科学科 3年"
          },
          {
            name: "秋山 友花",
            role: "マーケティング",
            introduction: "早稲田大学本庄高等学院卒業後、早稲田大学社会科学部に進学。中学3年時に地元群馬県伊勢崎市の伝統的工芸品である伊勢崎絣の技術に魅せられ、現在まで技を固定観念に捉われないユニークな方法で紡いでいけるよう奮闘してきた。現在は、インターンで土地に息づくものづくりのブランディングや記事化の手法を学びつつ、伊勢崎絣の記憶のアーカイブ活動をしている。",
            image: Profile10,
            instagram:"https://www.instagram.com/tomo__ka5.74?igsh=MThtZ3hlbnptMW5kbQ%3D%3D&utm_source=qr",
            facebook:"https://www.facebook.com/share/1BLNMX5Bea/?mibextid=wwXIfr",
            school:"早稲田大学 社会科学部 2年"
          },
          {
            name: "青木優奈",
            role: "マーケティング",
            introduction: "早稲田大学本庄高等学院卒業後、早稲田大学政治経済学部経済学科に所属。2023年度よりBeyond 2020 NEXT PROJECTに参加し、2026年度より現職。団体では主に世界子ども未来会議やイベント運営に携わる。2025年よりAIスタートアップにてインターンに従事し、2026年3月にはNPO法人Edfutureのワールド寺子屋4期に大学生メンバーとして参加。教育や社会問題への関心を持ちながら、学科での学びを通してビジネスや国際関係分野について理解を深めている。",
            image: Profile11,
            linkedin:"https://www.linkedin.com/in/yuna-aoki-0474b33b7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
            facebook:"https://www.facebook.com/share/18baxoyyjX/?mibextid=wwXIfr",
            school:"早稲田大学政治経済学部経済学科2年"
          }
        ].map((profile) => (
          <div class="flex flex-col bg-white shadow-lg rounded-lg my-6">
            <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
              <img class="aspect-square object-cover object-top" src={profile.image} alt="profile-picture" />
            </div>
            <div>
              <div class="p-6 text-center">
                <h4 class="mb-1 text-xl font-semibold text-slate-800">
                  {profile.name}
                </h4>
                <p
                  class="mb-1 text-md font-semibold text-slate-500 uppercase">
                  {profile.role}
                </p>
                <p class="text-sm font-semibold text-slate-500 uppercase whitespace-pre-wrap">
                  {profile.school}
                </p>
                <p class="text-base text-slate-600 mt-2 font-light whitespace-pre-wrap">
                  {profile.introduction}
                </p>
              </div>
              <div class="flex justify-center p-6 pt-2 gap-7">
                {profile.site ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.site,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <FaExternalLinkAlt className="h-5 w-5" />
                  </button>
                  : null}
                {profile.instagram ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.instagram,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiInstagram className="h-5 w-5" />
                  </button>
                  : null}
                {profile.facebook ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.facebook,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiFacebook className="h-5 w-5" />
                  </button>
                  : null}
                {/* {profile.X ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.X,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiX className="h-5 w-5" />
                  </button>
                  : null}
                {profile.linkedin ?
                  <button
                    onClick={() =>
                      window.open(
                        profile.linkedin,
                        '_blank'
                      )
                    }
                    className="group inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-gray-800 text-slate-400 transition-all duration-300 hover:border-slate-400 hover:text-white"
                  >
                    <SiLinkedin className="h-5 w-5" />
                  </button>
                  : null} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}