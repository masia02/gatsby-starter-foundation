---
template: blog-post
title: ENS AppからIPFSに直接アップロード（Temporal Cloudを使用）
slug: ensapp_ipfs
date: 2020-06-16 00:58
description: ENS Appから.ethドメインに紐づけて簡単にIPFSに分散型Webサイトなどを簡単にアップできる
featuredImage: /assets/temporal2.png
---
**[ENSを取得](https://dapps-play.net/ensapp)**して、その.ethドメインに紐づけて簡単にIPFSに分散型Webサイトなどを簡単にアップできるようになっていたのでやってみました。

参考にしたページ：[Upload to IPFS Directly from the ENS Manager with New Tool from Temporal Cloud](https://medium.com/the-ethereum-name-service/upload-to-ipfs-directly-from-the-ens-manager-with-new-tool-ac055db5d2fe)

マイENSページの取得した.ethドメインを選択。詳細ページを表示します。

このツールは、IPFSピン留めサービス[Temporal Cloud](https://temporal.cloud/)を使用します。

## **使い方**

## **0）始める前に必要なもの**

**.ETHドメインを取得**しましょう。取得方法は、\
[.ETHドメインを取得してみた](https://dapps-play.net/ensapp) をご覧ください。

## **1）新しいコンテンツレコードを作成**

[ENS App](https://app.ens.domains/)に移動し、.ETH名を検索します。**RECORDS**がない場合は、右側の\[+]ボタンをクリックし、ドロップダウンメニューから\[コンテンツ]を選択します。

## **2）「新規アップロード」をクリックします**

初めてコンテンツレコードを作成する場合は、右側の\[新しいアップロード]ボタンをクリックします。

名前に既にコンテンツレコードがある場合は、右側のアップロードアイコンをクリックします。

![](/assets/upload.png)

## **3）Temporal Cloudアカウントを作成する**

Temporal Cloudアカウントをまだお持ちでない場合は、「サインアップ」ボタンをクリックしてアカウントを作成してください。\
※アカウントを作成するのにクレジットカードや支払いは必要ありません。

**注**：新しいTemporal Cloudアカウントを作成してメールアドレスを確認すると、Temporal Cloudの無料枠が自動的に付与されます。これにより、最大3 GBのデータをアップロードできます。アップロードしたデータは、少なくとも12か月間IPFSネットワークに固定されます。さらに多くのデータをアップロードしたい場合、またはIPFSネットワークに12か月以上保持することを確認したい場合は、[ここで](https://play2.temporal.cloud/auth)アカウントをアップグレードできます。

Temporal Cloudアカウントを既にお持ちの場合は、このステップをスキップしてください（単一のTemporal Cloudアカウントを使用して、必要な数のENS名を作成できます）。

## **4）ログイン**

Temporal Cloudアカウントを作成してメールアドレスを確認した後、またはTemporal Cloudアカウントを既に持っている場合は、Temporal Cloudのユーザー名とパスワードを入力して、\[ログイン]をクリックします。

![](/assets/temporal.png)

## **5）ファイルをアップロードする**

「フォルダーアップロード」ボタンを使用してフォルダー全体（例：ウェブサイトファイルが入っているフォルダー）をアップロードするか、「ファイルアップロード」ボタンを使用して単一のファイルをアップロードします。

![](/assets/temporal2.png)

## **6）IPFSハッシュをコンテンツレコードに保存します**

ファイルはIPFSにアップロードされていますが、IPFSハッシュはまだENS名のコンテンツレコードに保存されていません。これを行うには、「保存」をクリックします。

Web3ブラウザーは、レコードを保存するためのトランザクションの確認を求めてきます。（**ヒント**：取引の確認を迅速化するために、イーサリアムネットワークの取引手数料をより高い金額に調整することができます。）

## **7）これで完了です。**

IPFSハッシュをコンテンツレコードに保存するトランザクションが確認されると、完了です。アップロードしたファイルのIPFSハッシュがコンテンツレコードに表示されます。

## **どのブラウザでもアクセスます。**

例：Web3ブラウザーで <https://masia02.eth/> にアクセスできます。\
通常のブラウザでは、<https://masia02.eth.link> とお尻に.linkを付けるとアクセスできます。

デスクトップブラウザに**MetaMask拡張機能**がある場合は、\[[yourname] .eth /]に移動して（末尾に「/」を必ず含める）、通常のWebサイトと同じように読み込まれるはずです。

## **結論**

これによりプロセスが大幅に簡素化され、分散型Webサイトを簡単に立ち上げることができます。

\----------------------------------------

**▼私のプロフィールページ**

ENSドメインを取得してIPFSに静的ページを適当に作ってアップしました。\
[masia02.eth](https://masia02.eth.link)

私が日々思うつぶやきもフォローしてくれる方は、\
[masia02 Twitterをフォローする](https://twitter.com/masia02)

記事を読みたい方は、\
[CipherWeb Line公式アカウントをフォローする](https://line.me/R/ti/p/%40zkz7445k)

<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://note.com/masia02/circle" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="https://images.weserv.nl/?w=100&url=ssl:assets.st-note.com/production/uploads/images/26925495/bb1fe45e8dbc0961ea8a14f3bb96f486.png?format=jpeg&amp;amp;height=1006&amp;amp;quality=45&amp;amp;width=1920" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">CipherWebサークル｜masia02.eth (CipherWeb)</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;">Web3.0 Spatial Web メタバース AI ブロックチェーン IoTなど先端技術がいつ一般に浸透するかわからないが、知っておくと良いことやお得情報など情報共有するサークル。</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>