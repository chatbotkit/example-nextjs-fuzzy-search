'use client'

import { useEffect, useRef, useState } from 'react'

import Link from 'next/link'

import { search } from '@/actions/search'

import clsx from 'clsx'

export default function SearchWidget() {
  const [results, setResults] = useState([])

  const [query, setQuery] = useState('')

  const [debouncedQuery, setDebouncedQuery] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedQuery(query)
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [query])

  useEffect(() => {
    async function doSearch() {
      const results = await search({ query: debouncedQuery })

      setResults(results)
    }

    doSearch()
  }, [debouncedQuery])

  const dialogRef = useRef(null)

  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      } else if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="absolute bottom-0 right-0 pb-5 pr-5">
      <dialog
        ref={dialogRef}
        className={clsx({
          'absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl m-5 bg-white border border-gray-300 rounded-lg shadow-lg p-10 flex flex-col gap-2':
            open,
        })}
      >
        <input
          type="search"
          className="p-2 border border-gray-300 rounded-lg resize-none w-full"
          placeholder="What are you looking for?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {results.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {results.map((result) => (
              <li
                key={result.id}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <Link href={result.meta.source} target="_blank">
                  <h3 className="text-base font-bold hover:underline">
                    {result.meta.title}
                  </h3>
                  <div className="text-sm line-clamp-2">
                    {result.meta.description}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </dialog>
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white text-xl p-2 rounded-2xl"
        onClick={() => setOpen(!open)}
      >
        Click to search
      </button>
    </div>
  )
}
