import type { NextPage } from 'next'
import { useState } from 'react'
import { CgCoffee, CgDice6 } from "react-icons/cg"

const Shacre: NextPage = () => {
  const [tab, setTab] = useState('')

  const tabChange = (e: any) => {
    setTab(() => e.target.value)
  }

  return (
    <>
      <div className='wrapper'>
        <div className='title'>
          <img className='logo' src='/imgs/logo.png' alt='SHA:CRE' width='250' height='60'/>
        </div>

        <div className='introduction'>
          「シャ：クレ」はお客様がコーヒーを飲みに来て、お店で初めて会った人と気軽にボードゲームで遊んでいく。
          そんな雰囲気を目指しております。
          もちろん、ご家族やカップル、学校の同級生等でのご来店も大歓迎です。
          まずはコーヒーだけでもいかがでしょうか？
        </div>

        <div className='tabs'>
          <input type='radio' id='tab-cafe' className='tab_cafe' name='tab' value='cafe' onChange={tabChange}/>
          <label htmlFor="tab-cafe" className='tab_label'>
            <div className='tab_icon'>
              <CgCoffee/>
            </div>
            <div className='tab_text'>カフェ</div>
          </label>
          <input type='radio' id='tab-boardgame' className='tab_boardgame' name='tab' value='boardgame' onChange={tabChange}/>
          <label htmlFor="tab-boardgame" className='tab_label'>
            <div className='tab_icon'>
              <CgDice6/>
            </div>
            <div className='tab_text'>ボードゲーム</div>
          </label>

          {/* カフェのコンテンツ */}
          {
            tab === 'cafe' &&
            <div className='contents' id='cafe-content'>
              <div className='contents_title'>メニュー</div>
                <div className='menu_list'>
                  <dl className='menu'>
                    FOODS
                    <div>
                      <dt>ホットサンド（ハムチーズエッグ）</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>ホットサンド（アボカドエビマヨ）</dt>
                      <dd>&yen;450</dd>
                    </div>
                    <div>
                      <dt>ホットサンド（あんこバター）</dt>
                      <dd>&yen;450</dd>
                    </div>
                    <div>
                      <dt>サンドイッチ（ハムエッグ）</dt>
                      <dd>&yen;400</dd>
                    </div>
                  </dl>
                  <dl className='menu'>
                    DRINKS
                    <div>
                      <dt>コーヒー（中煎り、Hot）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>コーヒー（中深煎り、Hot）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>コーヒー（深煎り、Hot）</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>アイスコーヒー</dt>
                      <dd>&yen;500</dd>
                    </div>
                    <div>
                      <dt>紅茶（Hot）</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>アイスティー</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>ウーロン茶</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>カルピス</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>カルピスソーダ</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>メロンソーダ</dt>
                      <dd>&yen;400</dd>
                    </div>
                    <div>
                      <dt>クランベリーソーダ</dt>
                      <dd>&yen;400</dd>
                    </div>
                  </dl>
                </div>
                ※値段は全て税込価格です。
            </div>
          }

          {/* ボードゲームのコンテンツ */}
          {
            tab === 'boardgame' &&
            <div className='contents' id='boardgame-content'>
              {/* 利用状況 */}
              <div>
                <div className='contents_title'>利用状況</div>
                <div className='seat_status'>
                  <div className='card'>
                    <div className='card_title'>空席</div>
                    <div className='card_contents'>8 / 12</div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>利用中</div>
                    <div className='card_contents'>4</div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>相席中</div>
                    <div className='card_contents'>4</div>
                  </div>
                </div>
                <div>
                  リアルタイム更新ではありません！（できるだけ頑張ります！）<br />
                  席数が少ないので、ご来店前に予約していただけると確実です。<br />
                  ご予約の際はLINEやInstagramからご連絡ください。
                </div>
              </div>

              {/* 料金 */}
              <div>
                <div className='contents_title'>料金</div>
                <div className='use_pricing_table'>
                  <div className='card'>
                    <div className='card_title'>基本(1人)・ 延長</div>
                    <div className='card_contents'>¥400 / 1h</div>
                    <div className='card_sub'>
                      ※1ドリンクオーダー制<br />
                      （カフェ利用後であれば不要）
                    </div>
                  </div>
                  <div className='card'>
                    <div className='card_title'>パック(1人)</div>
                    <div className='card_contents'>
                      4時間 : ¥1,200<br />
                      フリー : ¥2,000
                    </div>
                    <div className='card_sub'>
                    </div>
                  </div>
                </div>
                <div>
                  どちらも持ち込み可です！（酒類は除く）<br />
                  営業時間は11:00~22:00となっています。
                </div>
              </div>

              {/* ボードゲーム一覧 */}
              <div>
                <div className='contents_title'>ボードゲーム一覧</div>
                <div className='board_game_list_wrapper'>
                  <iframe className='board_game_list' src="https://bodoge.hoobby.net/spaces/sha_cre_cafe/embedded/games?q[order_type]=created_desc&image_size=normal&font_size=normal&icon_recommend=show&icon_new=show&name_en=show&myboardgame=show&staff_text=show&user_id=54976">
                  </iframe>
                  <a href="https://bodoge.hoobby.net/spaces/sha_cre_cafe/games" target="_blank">ボドゲーマで見る</a>
                </div>
              </div>

              {/* レーティング */}
              <div>
                <div className='contents_title'>レーティング</div>
                <br />
                coming soon...
              </div>
            </div>
          }
        </div>

        <div className='footer'>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.2199228287423!2d139.17783731524773!3d35.27565798029089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a5bcdead0b6d%3A0xccaf6c0c716d30d0!2z6bSo5a6u6aeF!5e0!3m2!1sja!2sjp!4v1649087869459!5m2!1sja!2sjp" width="500" height="450" loading="lazy"></iframe>
          </div>
          <div className='shop_info'>
            <div className='shop_info_block'>
              <div className='shop_info_title'>所在地</div>
              <div className='shop_info_contents'>神奈川県 小田原市 南鴨宮3-9-7</div>
            </div>
            <div className='shop_info_block'>
              <div className='shop_info_title'>SNS</div>
              <div className='shop_info_contents'></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          height: 100%;
          text-align: center;
          background-color: #666;
          color: #fff;
        }
        .logo {
          margin: 30px 0;
        }
        .title {
          padding: 20px 0;
        }
        .introduction {
          max-width: 500px;
          margin: 0 auto;
          text-align: left;
        }
        .tabs {
          min-height: 320px;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 2%;
        }
        /* タブのスタイル */
        .tab_label {
          width: calc(80%/2);
          margin: 5%;
          padding: 2%;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          float: left;
          text-align: center;
          transition: all 0.2s ease;
        }
        .tab_label:hover {
          opacity: 0.75;
          background-color: #bbb;
          cursor: pointer;
        }
        .tabs input:checked + .tab_label {
          background-color: #E6B8AF;
          color: #000;
          box-shadow: 1px 2px #000;
        }
        input[name="tab"] {
          display: none;
        }
        /* タブ切り替えの中身のスタイル */
        .contents {
          clear: both;
          animation-name: fade;
          animation-duration: 0.5s;
        }
        @keyframes fade{
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        /* 選択されているタブのスタイルを変える */
        .tabs input:checked + .tab_item {
          background-color: #E6B8AF;
        }
        .tab_icon {
          font-size: 80px;
        }
        .tab_text {
          font-size: 20px;
          font-weight: bold;
        }
        .menu_list {
          display: flex;
        }
        .menu {
          width: 100%;
          padding: 5%;
          font-size: 1rem;
        }
        .menu div {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin: 5px 0;
          padding: 5px 0;
        }
        .menu div::after {
          content: "";
          display: block;
          position: absolute;
          top: 50%;
          z-index: 1;
          width: 100%;
          border-bottom: dotted 1px #fff;
        }
        .menu dt{
          margin:0;
          padding: 0 5px 0 0;
          z-index: 2;
          text-align: left;
          background-color: #666;
          }
        .menu dd{
          margin:0;
          padding: 0 0 0 5px;
          z-index: 2;
          text-align: right;
          background-color: #666;
        }
        .seat_status {
          display: flex;
          justify-content: center;
        }
        .use_pricing_table {
          display: flex;
        }
        .board_game_list_wrapper {
          padding: 20px;
        }
        .board_game_list {
          height: 50vh;
          width: 100%;
          min-width: 100%;
          background: #fff;
          padding: 20px 10px 10px 10px;
          border: none;
          margin: 20px auto;
          -webkit-overflow-scrolling: touch;
          box-sizing: border-box;
        }
        .footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 100%;
          background-color: #333;
          color: #fff;
          padding: 20px;
        }
        .shop_info {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .shop_info_block {
          margin-top: 20px;
        }
        .shop_info_title {
          background-color: #666;
        }
        .contents_title {
          font-size: 40px;
          margin-top: 50px;
          background: #333;
          box-shadow: 1px 2px #000;
        }
        .card {
          width: 100%;
          padding: 10px;
          margin: 20px 10px;
          background-color: #E6B8AF;
          box-shadow: 1px 2px #000;
          color: #000;
          font-size: 20px;
        }
        .card_title {
          margin-bottom: 12px;
        }
        .card_contents {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 64px;
          font-size: 24px;
          font-weight: bold;
          background-color: #E6D8CF;
        }
        .card_sub {
          min-height: 56px;
          text-align: left;
          padding: 8px 8px 0 24px;
        }
        @media screen and (max-width:480px) {
          .introduction {
            max-width: 300px;
            font-size: 14px;
          }
          .contents_title {
            font-size: 20px;
          }
          .card {
            font-size: 14px;
          }
          .card_contents {
            min-height: 32px;
            font-size: 14px;
            background-color: #E6D8CF;
          }
          .card_sub {
            min-height: initial;
            padding: initial;
          }
          .footer {
            flex-direction: column;
            align-items: center;
          }
          .map iframe {
            height: 100%;
            width: 100%;
          }
        }
      `}
      </style>
    </>
  )
}

export default Shacre