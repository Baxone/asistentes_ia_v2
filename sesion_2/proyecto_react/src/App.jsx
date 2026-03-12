import { useAppStore } from './store/useAppStore'
import './App.css'

function App() {
  const { count, increment, decrement, reset } = useAppStore()

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body text-center">
              <h1 className="card-title mb-4">Boilerplate React + Vite</h1>
              <p className="text-muted mb-4">
                Stack: React 19 · Zustand · Bootstrap 5 · React Query · Jest
              </p>
              <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={decrement}
                >
                  -
                </button>
                <span className="fs-3 fw-bold">{count}</span>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={reset}
              >
                Reiniciar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
