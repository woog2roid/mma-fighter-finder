# mma-fighter-finder
mma 선수들의 정보를 제공하는 사이트

## 실행장면
> API 서버를 열어두지 않아서, 배포된 링크에서 실제로 선수를 찾을 수는 없다.  
> - api_server를 다운받아서 직접 node로 실행하면 로컬서버로 작동하긴 한다.

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
  - 근데 서버 열면, api키도 정해야하고 좀 힘들 거 같으면서도 재밌을 듯...?

</details>
</div>