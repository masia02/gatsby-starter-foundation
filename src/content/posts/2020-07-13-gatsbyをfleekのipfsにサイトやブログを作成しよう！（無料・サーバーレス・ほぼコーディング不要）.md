---
template: blog-post
title: GatsbyをFleekのIPFSにサイトやブログを作成しよう！（無料・サーバーレス・ほぼコーディング不要）
slug: gatsby-fleek
date: 2020-07-13 23:04
description: GatsbyJSサイトをFleekのIPFSにデプロイする簡単な方法
featuredImage: /assets/fleek_co_google.png
---
[GatsbyをNetlifyでのホスティング](https://alis.to/masia02/articles/KWyp1JrvNd1n)を知ってから読むことをオススメします。\
最近IPFSに簡単にアップするツールがでており、自分のサイトを移して試してみました。

GatsbyをIPFSにてサイトやブログを作成してみよう！\
[スターターライブラリ](https://www.gatsbyjs.org/starters/?v=2)に、サイトやブログのテンプレートが複数あります。

## **GatsbyJSサイトをFleekのIPFSにデプロイする簡単な方法**

[スターターライブラリ](https://www.gatsbyjs.org/starters/?v=2)から利用したいテンプレートのGithubボタンを押す

↓

その[Github](https://github.co.jp/)のページが開くので「フォーク」して自分のリポジトリに追加する

↓

FleekにログインしてSitesの「Add new site」をクリック。

↓

![fleek](/assets/fleek.jpg "fleek")

Githubと繋いで先程フォークしたリポジトリを選択。

↓

使用するビルド設定を下記のように設定します。\
Other\
fleek/gatsby:node-11\
yarn && yarn build\
public

![ビルド設定](/assets/f174c9d0-4e00-4a51-bde4-2be7b94ab05f.jpg "ビルド設定")

↓

「DEPLOY SITE」をクリックして、次のステップに進みます。

↓

サイトのページにリダイレクトされます。ここで、サイトが構築および展開されるのを待ちます。

![サイト構築および展開](/assets/09e0518a-e825-43a0-887e-e5f62af930e3.jpg "サイト構築および展開")

展開が完了すると、サイトにアクセスできます。

カスタムドメインの設定も可能です。

**Netlify CMS対応のNetlifyからFleekにドメインを移行した場合、**

Netlify CMS → Github → Fleek → IPFS

のようにNetlify CMSでの投稿がIPFSを更新するようにもできました。\
でも、もし不具合などあった場合はドメイン設定を戻すだけでnetlifyの表示にできます。

ちなみにこのブログを移行して試したのですが、お問合せフォームがNetlifyの機能のため動作しなかったので非表示にすればいいかと思ったが、記事下部のリンクが繋がらない不具合もあり一旦Netlifyに戻しています。



**[Forestry CMSとFleek](https://blog.fleek.co/posts/make-website-without-coding-cms)で試しに作成したブログがこちら**[](https://dapps-play.net/)<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://shared-it.net/" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="https://capture.heartrails.com/100x100?https://shared-it.net/" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">Shared-IT</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;">Spatial Web XR 3D web3 Blockchain AI 5G IOTなど先端技術を好む雑記ブログ</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>

ペラ１のGatsbyサイトには良いかもですね！\
[自社サイト](https://cipher-web.com/)もFleekでIPFSにアップしてみました。\
Githubのプライベートリポジトリでも作成できました。

\---------------------------------------------------

私が日々思うつぶやきもフォローしてくれる方は、\
[masia02 Twitterをフォローする](https://twitter.com/masia02)

記事を読みたい方は、\
[CipherWeb Line公式アカウントをフォローする](https://line.me/R/ti/p/%40zkz7445k)

<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://note.com/masia02/circle" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="https://images.weserv.nl/?w=100&url=ssl:assets.st-note.com/production/uploads/images/26925495/bb1fe45e8dbc0961ea8a14f3bb96f486.png?format=jpeg&amp;amp;height=1006&amp;amp;quality=45&amp;amp;width=1920" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">CipherWebサークル｜masia02.eth (CipherWeb)</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;">Web3.0 Spatial Web メタバース AI ブロックチェーン IoTなど先端技術がいつ一般に浸透するかわからないが、知っておくと良いことやお得情報など情報共有するサークル。</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>