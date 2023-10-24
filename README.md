# GitKraKen-Crack
GitKraKen8.2.0-9.x的破解使用

## 破解要求环境
- Node.js Version>=12 LTS
- yarn
- GitKraKen v8.2.0-9.x

## gitkraken下载地址
[gitkraken](https://www.gitkraken.com/git-client/try-free)

## 破解步骤

下载之后需要先运行安装下载的GitKraken（它会自动安装到AppData/Local/gitkraken9.x中）。安装完毕后将会自动打开gitkraken，此时直接将其关闭即可。
### 2.从npm安装yarn
- npm install --global yarn
### 3.git clone https://github.com/qsshs/GitKraKen-Crack.git
- cd GitKraKen-Crack
- yarn install
- yarn build
- yarn gitcracken patcher


## 后续
### 屏蔽更新
在C:\Windows\System32\drivers\etc下的hosts文件中最下面添加一行`127.0.0.1 release.gitkraken.com`即可。
> 或者，直接在AppData/Local/gitkraken目录下，将update.exe删掉，也可禁止gitkraken自动更新。  

### 从软件本体启动而不是update或安装包
在AppData/Local/gitkraken/app-9.x/目录下的gitkraken.exe才是真正的客户端本体。  
