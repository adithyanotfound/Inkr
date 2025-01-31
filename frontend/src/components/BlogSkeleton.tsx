export const BlogSkeleton = () => {
    return (
      <div role="status" className="animate-pulse py-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-1 w-1 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>
        <div className="space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        <div className="h-4 w-20 bg-gray-200 rounded mt-4"></div>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  
  