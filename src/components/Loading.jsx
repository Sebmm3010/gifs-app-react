
export const Loading = ({ isLoading }) => {

    return (
        <div className="container">
            {
                isLoading && (<div className="spinner"></div>)
            }
        </div>
    )
}
