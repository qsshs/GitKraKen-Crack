# GitKraKen-Crack
GitKraKen7.5.5的破解使用

## GitKraKen7.5.5下载地址
https://release.axocdn.com/win64/GitKrakenSetup-7.5.5.exe

## 破解要求环境
- Node.js Version>=12 LTS
- yarn
- GitKraKen v7.5.5

## 破解步骤
### 1.下载上述下载地址中的GitKraKen7.5.5
下载之后需要先运行安装下载的GitKraken（它会自动安装到AppData/Local/gitkraken7.5.5中）。安装完毕后将会自动打开gitkraken，此时直接将其关闭即可。
### 2.从npm安装yarn
- npm install --global yarn
### 3.git clone https://github.com/qsshs/GitKraKen-Crack.git
- cd GitKraKen-Crack
- yarn install
- yarn build
- node dist/bin/gitcracken.js patcher --asar C:/Users/{填上你的用户名}/AppData/Local/gitkraken/app-7.5.5/resources/app.asar  

以上步骤经过测试完全可行。
> 我的环境：node.js:v16.7.0  
> yarn:v1.22.19  
> gitkraken:v7.5.5  


## 后续
### 屏蔽更新
在C:\Windows\System32\drivers\etc下的hosts文件中最下面添加一行`127.0.0.1 release.gitkraken.com`即可。
> 或者，直接在AppData/Local/gitkraken目录下，将update.exe删掉，也可禁止gitkraken自动更新。  

### 从软件本体启动而不是update或安装包
在AppData/Local/gitkraken/app-7.5.5/目录下的gitkraken.exe才是真正的客户端本体。  

经过上面的操作之后，再打开（从客户端本体）gitkraken，则可clone github上的private仓库，功能一切正常。  
> 都说gitkraken6.5.1是最后一个免费版本，但是在我的使用过程中，无法clone github上的private repo，因为根本无法登录github账号，不知道是什么原因。