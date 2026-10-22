import { Component, type ErrorInfo, type ReactNode } from 'react'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  error: Error | null
}

// 화면을 그리다 에러가 나면 흰 화면 대신 안내와 에러 메시지를 보여준다.
// 에러 경계는 아직 함수 컴포넌트로 만들 수 없어서 class로 만든다.
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // 콘솔에 어느 컴포넌트에서 났는지까지 남긴다. AI에게 보낼 때 이 내용을 함께 붙인다.
    console.error('화면 에러:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <main className="mx-auto max-w-2xl p-4 sm:p-8">
          <h1 className="text-2xl font-bold">화면을 그리다 문제가 생겼어요</h1>
          <p className="mt-4 break-all rounded-card bg-danger-soft p-4 text-danger">
            {this.state.error.message}
          </p>
          <button onClick={() => location.reload()} className="mt-4 underline">
            새로고침
          </button>
        </main>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
