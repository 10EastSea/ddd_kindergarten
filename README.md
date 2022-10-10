# DDD Kindergarten

2인 플레이 온라인 웹 기반 게임 (서버에 2명만 접속 가능)

## Version
- `Node.js` : 16.15.0
- `React.js` : 18.1.0
- `Express.js` : 4.18.1

## Run
1. client 경로에 `.env.development` 파일을 생성한다.
2. 해당 파일에 `REACT_APP_SERVER_URL = 본인이 설정한 server 도메인` 을 넣어준다.
3. server 경로에 `config/default.js` 파일을 생성해준다.
4. 해당 파일에 다음과 같이 설정해준다.
```
	module.exports = {
		...
    	client: "" //1번에서 설정한 클라이언트 URL과 같이 설정한다.
	}
```
5. `cd client && npm i && cd ../server && npm i && cd ..` 을 실행한다.
6. `./start.sh` 를 실행한다.
