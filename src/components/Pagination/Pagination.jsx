import { useEffect, useState } from "react"
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = ({
    totalPosts,
    postsPerPage,
    currentPage,
    setCurrentPage,
}) => {

    const [pageNumbers, setPageNumbers] = useState([])

    useEffect(() => {
        const pages = []
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pages.push(i)
        }
        setPageNumbers(pages)
    }, [totalPosts])

    return (
        <div className="m-auto w-fit flex items-center mb-64 md:mb-14">
            <button
                className={`${currentPage < 2 && 'invisible'} 'block' pt-1`}
                onClick={() => setCurrentPage(currentPage - 1)}
                aria-label="previews page"
            >
                <MdArrowBackIos className="block  text-lg"/>
            </button>
            <div>
                {pageNumbers.map((number, index) => (
                    <button
                        key={index}
                        className={`text-3xl mx-2.5 ${currentPage !== number ? 'text-black/40 font-normal' : 'font-semibold'}`}
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button
                className={`${currentPage === pageNumbers.length && 'invisible'} 'block' pt-1`}
                onClick={() => setCurrentPage(currentPage + 1)}
                aria-label="next page"
            >
                <MdArrowForwardIos className="block  text-lg"/>
            </button>
        </div>
    )
}

export default Pagination