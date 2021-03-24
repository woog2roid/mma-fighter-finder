# mma-fighter-finder
mma 선수들의 정보를 제공하는 사이트

> 도메인과 관련해서(무료 임대 도메인을 유지하기도 애매하고, 도메인을 구입하자니 괜히 돈만 쓰는 듯 하여) HTTPS를 인증할 수 없어서, HTTP로 서버를 열었다.  
> 그로 인해, 크롬 기준으로 "안전하지 않은 보안 설정"을 허용해주어야 서버와 통신이 가능하다. 
> 혹은, backend를 올려놨으니 로컬로 서버를 돌릴 수도 있지만, 이는 frontend 쪽의 코드도 건드려야 하기 때문에 추천하지 않는다.


## 실행장면
- 선수를 검색하면  이렇게 전적이 나온다.  

![](https://user-images.githubusercontent.com/54667577/110948546-d527a900-8384-11eb-8fda-ae3ea57ceba5.png)
![](https://user-images.githubusercontent.com/54667577/110948555-d6f16c80-8384-11eb-9e2c-75afc74554db.png)

- 전체 실행장면  

![](https://user-images.githubusercontent.com/54667577/110946940-dce64e00-8382-11eb-9960-b6a30bf2f1fd.gif)


<details>
<summary>개발하며 느낀 점...</summary>
<div markdown="1">

- 리액트를 공부했으니 뭐라도 만들어보고 싶다는 생각에 제작하였음
  - 아쉬운 점은 리덕스라던가 conetex API를 이용할 생각이었는데 생각보다 상태관리 할 것이 없어서 어쩌다 보니 이용하지 않게되었음... 
- [woog2roid/mma-api](https://github.com/woog2roid/mma-api)를 이용해서 api 서버를 제작하였음
  - 원래 쓰려고 생각한 [오픈소스 mma-api](https://github.com/valish/mma-api)가 있었는데 돌아가질 않아서, fork해서 아주 약간 손을 봤다... 크게 손을 본건 아니고...
- github page를 이용해서 build를 하긴 하였는데, 서버를 여는 것과 관련해서 작업을 전혀 하지 않아서, 선수 검색은 불가능 한 상태로 끝냈는데 조금 아쉽기도 하다...
  - 근데 서버 열면, 좀 힘들 거 같으면서도 재밌을 듯...?

정말로 마무리하며 2021/03/24 추가
- 원래는 서버를 여는김에 핸드폰에서도 편하게 볼 수있게 반응형으로 마무리를 하려고 하였으나, HTTPS에서 도메인과 관련해서 가로막히는 바람에 이는 포기했다. (CSS코드가 조금 많이 별로다.)
- 가장 싼 도메인을 하나 살까도 고민 중이긴 한데 그렇다 해도 이 사이트를 더 관리하지는 않을 것 같다. 
</details>
</div>
