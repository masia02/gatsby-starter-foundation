---
template: blog-post
title: WebaverseからみるdWebXR
slug: dWebXR
date: 2021-02-10 23:12
description: OSS・EtoEEであり、WebXRのようなオープンスタンダードと分散型インフラストラクチャを組み合わせて、アプリや仮想オブジェクトをユーザーが所有できるようにするプラットフォーム
featuredImage: /assets/1100x220.png
---
日本のVR界隈はVRChatが流行っているようだが、もしVRChatが某FBに買収されて仕様が大きく変更されたり、サーバーがダウンしたらどうだろう。\
Mozilla hubsでワールド作ってAWSで運営してたとしても、AWSが停止するかもしれない。GAFAなどの大企業でも１社で運営している会社で、サーバーが一時停止する不具合など最近よくありますし、裏で何をしているか信頼できないニュースも多くなってきています。

### プライバシーを守る

> **オープンソース**\
> 信頼性は、それなりの期間に多くの人に使い倒され、ハッカーに狙われ耐え抜いたか。
>
> **エンドツーエンド暗号化**\
> 利用者のみが鍵を持つことで、情報漏れを防ぐ。流出のほとんどが人が管理してるせいだから。

を前提として、

### 理想の空間Webプラットフォーム

**オープンスタンダード+分散型インフラストラクチャの融合**

> **[WebGL](https://ja.wikipedia.org/wiki/WebGL)**\
> ウェブブラウザで3次元コンピュータグラフィックスを表示させるための標準仕様。
>
> **[WebXR](https://developer.mozilla.org/ja/docs/Web/API/WebXR_Device_API)**\
> 仮想世界を提示するため（仮想現実、virtual reality、または VR）に、またはグラフィック画像を現実世界に追加するため（拡張現実、augmented reality、または AR）に設計されたハードウェアへの 3D シーンのレンダリングをサポートするために一緒に使用される標準のグループです。
>
> **[WebAssembly(wasm)](https://ja.wikipedia.org/wiki/WebAssembly)**\
> ウェブブラウザのクライアントサイドスクリプトとして動作するプログラミング言語（低水準言語）である。wasmとも称されており、ブラウザ上でバイナリフォーマットの形で実行可能であることを特徴とする。
>
> **dWeb**[Web3.0](https://messari.io/article/web3-eli5-what-is-web3)改めdWebと言われるブロックチェーン技術によって実現されようとしている新しいWebの世界。より民主化されたインターネットへのパラダイムシフトです。インターネットは、企業や特別な利益ではなく、集団によって管理されています。
>
> **[Ethereum](https://ethereum.org/ja/)**お金と分散型アプリケーションのためのグローバルでオープンソースなプラットフォームです。

などの技術を使った空間Webのメタバースに魅力を感じて、[Decentraland](https://dcl.masia02.hns.to/)や[Cryptovoxels](https://cv.masia02.hns.to/)に期待しているが、私の理想により近い方向性のプラットフォームを作成しているプロジェクトを見つけて興奮しました！

### webaverse.com

Webaverseは、WebGL、WebXR、wasmのようなオープンスタンダードとIPFS、Ethereumなどの分散型インフラストラクチャを組み合わせて、アプリや仮想オブジェクトをユーザーが所有できるようにする空間Webプラットフォームです。

一流のオタクとサイバースペースの天才によって構築されたメタバースであり、イーサリアムNFTとアバターにVRMを採用し、ブラウザーで優れたパフォーマンスを実現します。

まだ初期の世界を開発中ですが、毎日のように新しい機能が追加されている状況です。

### FLUX

FLUXは、Webaverseで主にデジタルコンテンツのmint(NFT化)に使用されるERC20トークンです。また、貿易の通貨として機能することができます。

ETHと交換することで、UniswapでFLUXを購入できます。とdocsに記載されていますが、ガイドはComing Soonとなっています。買うのは良く調べてからが良いと思います。

### NFT

> [NFT](https://coincheck.com/ja/article/454)（代替不可能なトークン）とは、唯一無二の「一点物」の価値を生み出せるトークンという意味で、現在ではブロックチェーンゲームやデジタルアートにおいて主に活用されています。

NFTで構築されているため、Webaverseで作成されたものはすべて、OpenSeaのようなオープンで分散型のマーケットプレイスで売買および取引できます。

Ethereumは現在、ガス代が高騰しているが、Ethereumサイドチェーンを利用しているので扱いやすくなっています。

**NFTをmintする方法**NFT作成には10 FLUX 必要です。Discordからと、公式サイトのCreateタブのITEM、PET、FlyingPET、MOUNTから用途別にmintできます。

※Discordは1社提供のコミュニティソフトですが、コミュニティの促進や使いやすさのため採用しているのでしょう。Ethereum Walletを使ったことが無くてもDiscordで管理できます。でも、もしDiscordがなくなったとしても公式サイトからEthereumを扱えるので問題ないと思います。

**サポートされているアセットタイプ**\
Webaverseは現在、次のファイル形式がサポートされています。

GLTFモデル（.gltf、.glb）\
VRM 3Dアバター（.vrm）\
MagicaVoxelモデル（.vox）\
3D Webサイト（.js）（THREE.js、A-Frame、Babylonなど）

Webaverseに直接簡単に取り込むことができます。\
また、素晴らしいことに以上の3Dモデルのコンテンツ自体をNFT化して所有でき、マイページではカードで表示されますが、Webaverseやプレビューでは３D表示されます。

また、画像(jpg,png)や音楽(mp3)などにも対応しており、ファイルを画面にドラッグアンドドロップで友達と共有することもできます。

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">New feature: Wanna share a pic with a friend? Drag n&#39; drop into the app window to spawn in the world. Simple as. <a href="https://t.co/vdXJuvSTFI">pic.twitter.com/vdXJuvSTFI</a></p>&mdash; Webaverse (@webaverse) <a href="https://twitter.com/webaverse/status/1354326601576685574?ref_src=twsrc%5Etfw">January 27, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

※ツイートの埋め込みがうまくいかないので、続きは下記リンクで

<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://note.com/masia02/n/nf8c961bfaff7" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="https://images.weserv.nl/?w=100&url=ssl:assets.st-note.com/production/uploads/images/44862549/rectangle_large_type_2_04c614220d0dbea0131e2ce7bd58c62e.png?fit=bounds&amp;quality=85&amp;width=1280" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">WebaverseからみるdWebXR｜masia02.eth (CipherWeb,LLC.)｜note</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;"> 日本のVR界隈はVRChatが流行っているようだが、もしVRChatが某FBに買収されて仕様が大きく変更されたり、サーバーがダウンしたらどうだろう。 Mozilla hubsでワールド作ってAWSで運営してたとしても、AWSが停止するかもしれない。GAFAなどの大企業でも１社で運営している会社で、サーバーが一時停止する不具合など最近よくありますし、裏で何をしているか信頼できないニュースも多くなってきています。  プライバシーを守る  オープンソース 信頼性は、それなりの期間に多くの人に使い倒され、ハッカーに狙われ耐え抜いたか。  エンドツーエンド暗号化 利用者のみが鍵を持つことで、情</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>