# mma-fighter-finder
> mma 선수들의 정보를 제공하는 사이트

### 링크
- [실행화면](#실행화면)
- [프로젝트를 마치고](#프로젝트를-마치고)

## 실행화면
- 선수 검색 화면  
	- ![](https://user-images.githubusercontent.com/54667577/110948555-d6f16c80-8384-11eb-9e2c-75afc74554db.png)
	- ![](https://user-images.githubusercontent.com/54667577/110948546-d527a900-8384-11eb-8fda-ae3ea57ceba5.png)

- 전체 실행화면 
	- ![](https://user-images.githubusercontent.com/54667577/110946940-dce64e00-8382-11eb-9960-b6a30bf2f1fd.gif)


## 프로젝트를 마치고
### 1. 첫 리액트 프로젝트로, 전부터 생각했었던 격투기 선수들의 전적을 찾아주는 사이트를 개발해보았다.
생각보다 정말 의미 있는 개발이었다. 리액트로 만든 첫 토이 프로젝트이기 때문이기도 하지만, 실제로 꾸준히 쓰는 결과물이라서 더욱 그렇다. 그래서 서버에 문제가 생길 때 마다 최대한 고치려고 하는 중이다. 처음에는 PC에서만 보도록 반응형도 지원하지 않다가, 이 사이트를 잘 이용하는 친구를 위해 반응형으로 개발하기도 하였다.

### 2. 생각보다 정말 간단한 개발이어서, contextAPI와 같은 상태관리 툴을 사용하지 않았던 점이 조금 아쉬웠다.
이 아쉬움은 나중에 [todo 앱](https://todo.woog2roid.dev)을 [프론트(react)](https://github.com/woog2roid/todo-frontend)와 [백(express)](https://github.com/woog2roid/todo-backend) 풀스택으로 개발하게 하였다. 후에도 진행했던 토이 프로젝트에서도 프로젝트를 진행하며 배우는 점이 좀 적다는 것이 항상 아쉬웠었고, 백엔드도 배워보고 싶었기에 하게 되었다. 

### 3. [woog2roid/mma-api](https://github.com/woog2roid/mma-api)를 이용해서 api 서버를 제작하였다.
원래 쓰려고 생각한 [오픈소스 mma-api](https://github.com/valish/mma-api)가 있었는데 돌아가질 않아서, fork해서 아주 약간 손을 봤다. 하지만 백에서 크롤링을 하여서 데이터를 보내주다보니, sherdog 사이트의 양식이 바뀌거나 googleIt 오픈소스에 오류가 있을 때마다 서버가 잘 돌아가지 않는 점이 아쉽다.

### 4. 개인 도메인(woog2roid.dev)을 갖는 데 큰 영향을 준 프로젝트이다.
서버가 https 연결이 되지 않아서 이용이 불편하다는 점이 마음에 걸려 결국 개인 도메인을 구매하게 되었다. 안드로이드 휴대폰을 제외한 모든 환경에서는 https 연결 설정을 변경해야 사용할 수 있거나, 아예 서버와의 연결을 막기도 하여서 도메인을 구매하고 let's encrypt를 이용하여 https 연결을 지원하였다.