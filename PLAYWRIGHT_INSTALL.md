# Playwright 설치 가이드

사용자가 명시적으로 MCP 설치를 요청하지 않는 경우 CLI 모드로 설치

## 1. CLI 모드 (코딩 에이전트용, 권장)

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

- Claude Code가 스킬을 자동 감지하여 사용
- 토큰 효율적, 코딩 에이전트에 최적화

### 주요 명령어

| 카테고리 | 명령어 |
|---|---|
| 탐색 | `open [url]`, `goto <url>`, `click <ref>` |
| 입력 | `type <text>`, `fill <ref> <text>`, `press <key>` |
| 캡처 | `screenshot`, `pdf`, `snapshot` |
| 탭 관리 | `tab-list`, `tab-new`, `tab-select` |
| 상태 저장 | `state-save [file]`, `state-load <file>` |
| 세션 | `list`, `-s=<name> <cmd>` |
| 모니터링 | `show` (대시보드), `console`, `network` |

### 설정 파일 (`.playwright/cli.config.json`)

```json
{
  "browser": {
    "browserName": "chromium",
    "launchOptions": { "headless": true }
  },
  "timeouts": {
    "action": 5000,
    "navigation": 60000
  },
  "outputDir": "./output"
}
```

## 2. MCP 서버 모드

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

### 주요 옵션

| 옵션 | 설명 |
|---|---|
| `--browser` | chrome, firefox, webkit, msedge |
| `--headless` | UI 없이 실행 |
| `--isolated` | 세션 간 상태 미저장 |
| `--storage-state` | 쿠키/로컬스토리지 저장/복원 |
| `--user-data-dir` | 브라우저 프로필 디렉토리 지정 |

## CLI vs MCP 비교

| | CLI (`@playwright/cli`) | MCP (`@playwright/mcp`) |
|---|---|---|
| 동작 방식 | 명령어 단위 실행 | MCP 서버로 상주 |
| 토큰 효율 | 높음 | 낮음 |
| 상태 유지 | 수동 (`state-save/load`) | 자동 |
| 적합 대상 | 코딩 에이전트 | 탐색적 자동화 |

## 참고

- [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli)
- [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)
- [@playwright/mcp (npm)](https://www.npmjs.com/package/@playwright/mcp)
