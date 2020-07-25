---
template: blog-post
title: Unity を IPFS にホストする方法
slug: unity-on-ipfs
date: 2020-07-25 15:58
description: Unityで作成したゲームをWebGLでエクスポート。そのデータをGithubにアップロードしてFleekでIPFSにホスト
featuredImage: /assets/unityonipfs.png
---
## 概要

Unity ：ゲームを作成し、IPFS 用にエクスポートします。

Github：デプロイのためにゲームをGithubにアップロードします。

Fleek：FleekはGithubからコンテンツを取得し、IPFSに公開します。Githubへのアップデートは自動的に更新されます。

# **Unity**

[Unity](https://unity.com/)のセットアップは割愛します。

作成したゲームをエクスポートします。

その際、WebGLを選択しプラットフォームを切り替えます。

プロジェクトをビルドして保存します。

# **Github**

[Github](https://github.com/)アカウントを作成し、リポジトリに移動して、\[新規]をクリックします。

リポジトリに名前を付けます。必要に応じてREADMEを初期化します。

UnityからエクスポートしたファイルをGithubリポジトリに追加します。

<br>

私は試しにGithubにアップされている

<https://github.com/MozillaReality/unity-webxr-export>

をフォークしてIPFSにアップしてみました。

こちら**[Setting up a Unity project for WebXR](https://github.com/MozillaReality/unity-webxr-export/blob/master/docs/project-setup.md)**を参考に後ほど個人的にいじってみたいと思います。

## Fleek

[Fleek.co](https://fleek.co/)にSIGN UPしてGithubでログインします。

「Add New Site」ボタンで新しいサイトを追加します。

![](/assets/fleek-hosting-teams.png)

「Connect with Github」ボタンでGithubに接続します。

![](/assets/fleek-new-site2.png)

Githubアカウントを選択します。

プロジェクトへの権限を許可します。

接続したら、プロジェクトを選択します。

![](/assets/fleek-new-site3.png)

追加の設定はいりません。「Deploy Site」ボタンでサイトを展開します。

![](/assets/fleek-new-site4.png)

◯◯◯.on.fleek.co にホストされます。

![](/assets/fleek-hosting5.png)

例：<https://unity-webxr-export.on.fleek.co/>

独自のカスタムドメインも設定できます。ブロックチェーンドメインも可能です。

## 終わりに

これでUnityで制作したWeb3ゲームなどをホストできます。

別途WebのSEOとしてOGPなども設定すると良いでしょう。

### 関連記事

<div class="blogcardfu" style="width:auto;max-width:9999px;border:1px solid #E0E0E0;border-radius:3px;margin:10px 0;padding:15px;line-height:1.4;text-align:left;background:#FFFFFF;"><a href="https://alis.to/masia02/articles/39r168Y74R7Y" target="_blank" style="display:block;text-decoration:none;"><span class="blogcardfu-image" style="float:right;width:100px;padding:0 0 0 10px;margin:0 0 5px 5px;"><img src="https://images.weserv.nl/?w=100&url=ssl:alis.to/d/api/articles_images/masia02/39r168Y74R7Y/3fc72766-0615-4212-aa62-8020dbaacea5.png?d=1200x630" width="100" style="width:100%;height:auto;max-height:100px;min-width:0;border:0 none;margin:0;"></span><br style="display:none"><span class="blogcardfu-title" style="font-size:112.5%;font-weight:700;color:#333333;margin:0 0 5px 0;">GatsbyをFleekのIPFSにサイトやブログを作成しよう！（無料・サーバーレス・ほぼコーディング不要） | ALIS</span><br><span class="blogcardfu-content" style="font-size:87.5%;font-weight:400;color:#666666;">ALIS is Japan&amp;#x27;s First Social Media Using Blockchain Technology</span><br><span style="clear:both;display:block;overflow:hidden;height:0;">&nbsp;</span></a></div>