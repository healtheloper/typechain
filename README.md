# TypeChain

## TypeScript 를 활용하여 블록체인 만들기

```bash
npm start
```
- 위 명령어를 통하여, 프로그램이 돌아가는 것을 확인할 수 있습니다. 

- npm start 를 하면 prestart를 통해 tsc 명령어를 사용하여 ts파일을 컴파일 한 후, dist 폴더로 js와 js.map 파일을 생성합니다.

- createNewBlock 함수를 통해 addBlock 함수를 실행하며, addBlock 함수에서 blockchain 배열에 새롭게 생성된 Block을 push하고, 이전 해쉬값을 통해 연결되어 체인이 형성됩니다.

<img width="610" alt="스크린샷 2021-02-09 오전 4 20 21" src="https://user-images.githubusercontent.com/58503584/107270337-2a268580-6a8e-11eb-8269-298c887379c9.png">

- TypeScript를 활용하여 TS의 큰 특징중 하나인 Validate 를 공부할 수 있는 프로젝트 였습니다.
