import React from 'react'
import { ChartBarIcon } from '@heroicons/react/solid'

type Props = {
    onStatClick: () => void
}

export function Header({ onStatClick }: Props) {
    return (
        <div className="flex h-full items-center bg-gradient-to-l from-fuchsia-800 to-indigo-800 px-4">
            <h1 className="grow">ボイコネプレビュー(new)</h1>
            <a href="?mode=classic">旧版</a>
            <button onClick={() => onStatClick()}>
                <ChartBarIcon className="h-5 w-5" />
            </button>
        </div>
    )
}
