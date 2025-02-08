# プロジェクト構成規約

## ディレクトリ構造

```
kamui-calculator/          # プロジェクトルート
├── src/                  # ソースコード
│   ├── app/             # Next.js アプリケーション
│   │   ├── layout.tsx   # レイアウト
│   │   └── page.tsx     # メインページ
│   └── components/      # Reactコンポーネント
├── public/              # 静的ファイル
│   └── images/         # 画像ファイル
└── .cursor/            # Cursor IDE設定（Git管理外）

```

## 規約

1. 開発作業
   - すべての開発作業は `kamui-calculator/` ディレクトリ内で行う
   - 親ディレクトリには新しいファイルを作成しない

2. ソースコード管理
   - ソースコードは `src/` ディレクトリ内に配置
   - コンポーネントは `src/components/` に配置
   - ページは `src/app/` に配置

3. 静的ファイル
   - 画像などの静的ファイルは `public/` ディレクトリに配置
   - 画像ファイルは `public/images/` に配置

4. Git管理対象外
   - `.cursor/` ディレクトリはGit管理対象外
   - `node_modules/` はGit管理対象外
   - `.next/` はGit管理対象外

## コミット規約

1. コミットメッセージ
   - feat: 新機能
   - fix: バグ修正
   - docs: ドキュメント
   - style: フォーマット
   - refactor: リファクタリング
   - test: テスト
   - chore: その他

2. ブランチ命名
   - feature/: 新機能開発
   - fix/: バグ修正
   - docs/: ドキュメント
   - refactor/: リファクタリング

## IDE設定
- Cursor設定は `.cursor/` ディレクトリに保存
- `.cursor/` はローカルのみで使用し、Git管理しない 