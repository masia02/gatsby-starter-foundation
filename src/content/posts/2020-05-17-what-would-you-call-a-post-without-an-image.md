---
template: blog-post
title: ログインはパスワード管理ソフトで自動入力が便利すぎ！パスワード登録も簡単！個人利用は無料
slug: post-no-image
date: 2019-10-16 08:40
description: パスワード管理ソフトを利用すると、マスターパスワード１つだけ覚えればOK！自動入力してくれて楽！
featuredImage: /assets/09-1.jpg
---
Webサービスやアプリを利用する時、SNS認証ができるものもありますが IDとパスワードが必要なことがほとんどです。

* パスワードを複数覚えるのは大変
* 同じパスワードの使い回しは危険
* パスワードはメモしていたが、探して入力が億劫

そこでパスワード管理ソフトを利用すると、\
マスターパスワード１つだけ覚えればOK！自動入力してくれて楽！\
になります。

パスワード管理ソフトは、これまで有料の「1PassWord」を使ってきましたが、\
無料で1PassWordと遜色の無いように使える「Bitwarden」を知り、乗り換えました。

最近ではSafariブラウザならiCloudにパスワードを保存や、Chromeブラウザなどもブラウザごとでパスワードの保存機能がありますが、ブラウザにパスワードを保存はパスワード流失が心配です。

また、Apple信者でMacやiPad,iPhoneでSafariしか使わないという人なら共有して一元管理できますが、いろんなデバイス環境でいろんなブラウザを用途によって使っていると共有してログインできない場合があり不便です。

そこでそれらの環境で共有して利用しやすいパスワード管理ソフトBitwardenを利用しましょう！

### **「BitWarden」は、100%オープンソースで高セキュリティ**

* 100%オープンソースソフトウェア
* Github上に全てのソースコードが公開
* 2段階認証も設定可能
* 全てのデバイスで同期、ほぼ全てのOS、ブラウザで使用可能
* 個人利用は無料

#### 「BitWarden」が高セキュリティな理由

* オープンソースソフトウェアは、使用ユーザーが増えるほどコミュニティによるチェック機能が厳しくなり、より安全なソフトウェアになる特性があります。
* 全てのデータは暗号化してサーバーにアップされるため、開発チーム側でも内容を見ることはできません。
* 2段階認証が設定できるのでセキュリティーを高めるため、必ず設定しましょう！

以上は無料で利用可能です。有料のプレミアムでは、1GB の暗号化されたファイルストレージが使えたり、複数の2段階認証が設定できたりとさらにセキュリティーを強固にできます。\
年間10ドルなら契約してもいいかも！

**BitWardenを最初の初期設定は少し手間かもしれませんが、1度設定してしまえばパスワード登録や入力が楽チンになります！**

### 初期設定の手順

[https://bitwarden.com/](https://bitwarden.com/ "https\://bitwarden.com/")

にアクセス

![](/assets/picture_pc_13ec14e27b2ecf7ee190fa01dcfaa6a0.png)

Create Accountをクリックして、まずはアカウント作成をしてください。

![](/assets/picture_pc_98f1760537ffe22487a27fa23f4119fe.png)

パスワードは、**マスターパスワード1つだけ覚えれば良い**のでしっかり覚えましょう。

#### 2段階認証の設定方法

**セキュリティーを高めるため2段階認証は必ず設定しましょう！**

1. Bitwardenにログイン
2. 上部ヘッダーメニューの「設定」をクリック
3. サイドメニュー内の「2段階認証」を選択すると、下記画面になります。

![](/assets/picture_pc_eeea9d459aebddc9aefc6690d998cf89.png)

プロバイダの認証アプリの「管理」ボタンをクリックし、マスターパスワードを入力。表示されたQRコードを認証アプリでスキャンするとアプリ上に6桁の数字が表示されるので、それを入力して有効化は完了です。

※認証アプリの「Google認証システム」はデバイス間での共有がiPhoneアプリできないため、スマホを新しく機種変更した時などに2段階認証のデータが引き継げず再設定が必要になってしまいます。\
デバイス間共有ができる「[Authy](ttps://authy.com/)」もしくは国産の「[IIJ SmartKey](https://www.iij.ad.jp/smartkey/)」の認証アプリもしくは、Blockstackの「[Twoblocks](https://twoblocks.leopradel.com/ "Twoblocks")」がオススメです。

#### リカバリーコードの保存

リカバリーコードは、2段階認証ができなくなった場合に必要になります。\
「リカバリーコードを確認」をクリックし、マスターパスワードを入力すると二段階認証のリカバリーコードが表示されます。コードを印刷するなりして保管しましょう。

このような大切なコードは、火事でも大丈夫な耐熱式の金庫に入れて保管や燃えない文字盤がベストですが、持ってなくて紙だと失くしそうという人はセキュリティーの高い別のクラウドストレージに保管するのも悪くはないとは思いますが自己責任でお願いします。

* OneDriveの個人用 Vault(厳重に保護する金庫フォルダ)はファイル３つまで無料
* [PCloud](https://my.pcloud.com/#page=register&invite=1tqvZtj89ok "PCloud")の暗号フォルダpCloud Crypto今なら一生125ドル。ハッキングした者には10万ドル相当のBTCの懸賞金が付いています。

#### 1Passwordなどからデータのインポート

これまで使っていたパスワード管理アプリからBitwardenへパスワードデータのインポートができます。

1. Bitwardenにログイン
2. 上部ヘッダーメニューの「ツール」をクリック
3. サイドメニュー内の「データをインポート」を選択すると、下記画面になります。

![](/assets/picture_pc_dd4c8d8bd117e5aa14b02e42438236ba.png)

1. インポートするファイルの形式は「選択」で選べる形式で必要なデータをエクスポートしておいてください。
2. インポートするファイルを選択\
   「ファイルを選択」ボタンからエクスポートしておいたデータを選択\
   「データをインポート」ボタンをクリックで完了です。

#### PC・Macのブラウザー拡張機能で使う方法

お気に入りのブラウザに拡張機能をインストールします。\
[Google Chrome](https://www.dapps-play.net/blog/an-essay-on-walking)｜Vivaldi｜Brave

[Mozilla Firefox](https://addons.mozilla.org/ja/firefox/addon/bitwarden-password-manager/)｜Tor Browser

[Opera](https://addons.opera.com/ja/extensions/details/bitwarden-free-password-manager/)

[Microsoft Edge](https://www.microsoft.com/ja-jp/p/bitwarden-extension-free-password-manager/9p6kxl0svnnl?rtc=1&activetab=pivot:overviewtab)

[Safari](https://www.dapps-play.net/blog/an-essay-on-walking)

#### 拡張機能をインストールすると

ブラウザー右上にBitwardenのアイコンが表示されます。\
クリックするとログイン画面が表示されます。\
一度ログインすればマスターパスワードのみ入力すればログインできるようになります。ブラウザを起動したらログインするようにしましょう。\
次で説明するパスワードの自動登録やWebアプリやサービスのログイン時に自動入力されるようになります。

#### ログインしてパスワードを自動登録

パスワードを覚えさせたいWebサイトのログイン画面でログインすると、\
「このパスワードを Bitwarden に保存しますか？」と表示されるので、「保存する」ボタンをクリックするだけで保存されます。

#### 手入力でパスワードを登録

拡張機能画面右上の「＋」をクリックすると、「アイテムの追加」画面からパスワードを登録できます。

#### 保管庫を同期

登録したパスワードは一定時間が経過すると自動で同期されます。すぐに同期したい場合は、拡張機能画面下の「設定」→「同期」→「保管庫を同期する」とクリックします。

![](/assets/picture_pc_070c6f1e80ef063ee538d51c267dfeea.png)

#### ブラウザー拡張機能でパスワードを生成

拡張機能画面下の「ジェネレータ―」をクリック。

#### パスワードについて

パスワードは、アプリ・サービスごとに使い回さずに別のパスワードをジェネレーターで生成して設定しましょう。\
英大文字＋小文字＋数字＋記号の組み合わせで9文字以上から長ければ長いほど良いです。\
このパスワードを Bitwarden に保存しましょう。\
また、パスワードの定期変更は不要と総務省で方針変更して報じられています。（パスワードの定期変更を強要したら覚えやすい短いパスワードの使い回しが目立った。定期変更しても短いパスワードは解析されやすいので、定期変更せずとも長いパスワードの方が安全。）

新しく会員登録したサイトにログインする場合、画面右上にBitwardenにログイン情報を保存ボタンが表示されるので、それをワンクリックで簡単に保存できます。

#### スマートフォンで使う方法

スマホとも連携して使用できます。下記からダウンロード。

* [iPhone](https://apps.apple.com/app/bitwarden-free-password-manager/id1137397744)
* [Android](https://play.google.com/store/apps/details?id=com.x8bit.bitwarden)

スマホやタブレットでは、Face IDや指紋認証を設定することで、マスターパスワードすら最初の入力以降必要なく利用できます。\
iPhone,iPadの場合「Password AutoFill」と連携すれば更に使いやすくなります。

#### 「Password AutoFill」の設定方法

「設定」→「パスワードとアカウント」→「パスワードを自動入力」→ パスワードを自動入力をオンにして「Bitwarden」を選択しておくと、\
ログインの入力フォームをタップするだけでキーボードにパスワード入力のボタンが表示されます。クリックだけで入力できます。

### まとめ

以上のように初期設定すると、\
・新規ログイン時にワンクリックでログイン情報を[Bitwarden](https://appfav.net/webapps/item.php?appId=55)に保存\
(※英大文字＋小文字＋数字＋記号の組み合わせで9文字以上の長いパスワードで使い回しをしない)\
・その後のログインはすべて自動入力\
で安全で大変便利になります。\
保管庫を検索すればパスワードの確認もできます。\
これでパスワードがいくつ増えても問題ありません！\
２段階認証は必ず設定して守りましょう！

### コマーシャル

[Appfav](https://appfav.net/)でWebアプリやサービスをいろいろ利用してみよう！

SafariやChromeのブラウザごとのブックマーク機能も充実してますが、別ブラウザで共有して使えないと不便なのでAppfav.netを作成しました！Webアプリをスマホのホーム画面のように使いやすくするサービスです。ほぼすべてのブラウザで利用できます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/_qTmGpWI3U0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

現状ネイティブアプリの方が使い勝手は良いですが、ダウンロードのハードルが高くWebアプリでも遜色のないものが作れるようになってきているので、まずWeb版をリリースし様子をみて、人気が出ればアプリ版も作成する流れの場合も多いようです。\
まずWeb版を試して気に入ったアプリがあるならダウンロードして利用するのが良いでしょう。

<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://appfav.net/about/" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="../mypage/img/f4_point-get-mission_safari.png" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">Appfav</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;">Appfavは、ブラウザで利用できるWebアプリやWEBサービス、ブロックチェーンアプリが見つかる！無料会員登録でマイアプリページ生成、ブックマークやホーム画面に追加して、アプリにすばやくアクセス！</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>