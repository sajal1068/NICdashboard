import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
          <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg border border-red-100">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h2 className="mt-4 text-2xl font-bold text-gray-900">Something went wrong</h2>
              <p className="mt-2 text-sm text-gray-600">
                An unexpected error has occurred. Please try refreshing the page or return to the home screen.
              </p>
            </div>

            {/* Technical Error Details */}
            <div className="mt-6 bg-red-50 p-4 rounded-md border border-red-200">
              <div className="flex items-center justify-between">
                <p className="text-red-700 font-bold text-sm">Error Message:</p>
                <button 
                  onClick={() => this.setState({ showDetails: !this.state.showDetails })}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors focus:outline-none"
                >
                  {this.state.showDetails ? "Hide Stack Trace" : "Show Technical Details"}
                </button>
              </div>
              
              <code className="mt-2 text-xs text-red-600 block bg-white p-3 rounded border border-red-100 overflow-auto max-h-32 font-mono">
                {this.state.error && this.state.error.toString()}
              </code>

              {this.state.showDetails && (
                <div className="mt-3 overflow-auto max-h-64 bg-slate-900 text-emerald-400 p-4 rounded text-[10px] leading-tight font-mono shadow-inner">
                  <pre className="whitespace-pre-wrap">{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Refresh Page
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="flex-1 flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-all"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;