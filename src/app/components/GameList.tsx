"use client";

import React, { useEffect, useState } from "react";
import { axiosRequest } from "../hooks/axiosUtils";
import { API_BASE_URL } from "../config";

interface GameInfo {
    _id: string;
    idGame: string;
    description: string;
    host: string;
    isFinished: boolean;
    totalFund: string;
    gameName: string;
    winner: string | null;
}

const PAGE_SIZE = 10;

const GameList: React.FC = () => {
    const [games, setGames] = useState<GameInfo[]>([]);
    const [filteredGames, setFilteredGames] = useState<GameInfo[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [expandedRow, setExpandedRow] = useState<string | null>(null);

    const fetchGames = async (pageNum: number, searchValue: string) => {
        setLoading(true);
        setError(null);
        try {
            const skip = (pageNum - 1) * PAGE_SIZE;
            const res = await axiosRequest({
                url: `${API_BASE_URL}/game/all`,
                method: "GET",
                params: { skip, limit: PAGE_SIZE },
            });

            //filter data that contains "host" field
            if (res && res.status === 200) {
                const filteredData = res?.data.data.filter((game: GameInfo) => !!game.host && game.host !== "");
                setGames(filteredData || []);
                setTotal(filteredData.length || 0);
                // Filter after fetch for search
                if (searchValue) {
                    setFilteredGames(
                        (filteredData || []).filter((game: GameInfo) => game.gameName.toLowerCase().includes(searchValue.toLowerCase()))
                    );
                } else {
                    setFilteredGames(filteredData || []);
                }
            } else {
                setError("Failed to fetch games");
            }
        } catch (e) {
            setError("Failed to fetch games");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchGames(page, search);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        // If searching, filter current page only
        if (search) {
            setFilteredGames(games.filter((game) => game.gameName.toLowerCase().includes(search.toLowerCase())));
        } else {
            setFilteredGames(games);
        }
    }, [search, games]);

    const totalPages = Math.ceil((search ? filteredGames.length : total) / PAGE_SIZE) || 1;

    const handleReset = () => {
        setSearch("");
        setPage(1);
        setExpandedRow(null);
        fetchGames(1, "");
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg min-w-[350px]">
            <div className="mb-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-gray-800 flex-1">Game List</h2>
                    <button
                        onClick={handleReset}
                        className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-sm font-medium border border-gray-300"
                    >
                        Reset
                    </button>
                </div>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                        setExpandedRow(null);
                    }}
                    placeholder="Search by game name..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            {loading ? (
                <div className="text-center text-gray-500 py-8">Loading...</div>
            ) : error ? (
                <div className="text-center text-red-500 py-8">{error}</div>
            ) : filteredGames.length === 0 ? (
                <div className="text-center text-gray-500 py-8">No games found.</div>
            ) : (
                <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-sm text-left border border-gray-200 rounded-lg">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">Name</th>
                                    <th className="px-3 py-2">Host</th>
                                    <th className="px-3 py-2">Fund</th>
                                    <th className="px-3 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredGames.map((game) => (
                                    <React.Fragment key={game._id}>
                                        <tr
                                            className={`border-t border-gray-100 hover:bg-gray-50 cursor-pointer ${
                                                expandedRow === game._id ? "bg-blue-50" : ""
                                            }`}
                                            onClick={() => setExpandedRow(expandedRow === game._id ? null : game._id)}
                                        >
                                            <td className="px-3 py-2 font-mono text-xs">{game.idGame}</td>
                                            <td className="px-3 py-2 font-medium">{game.gameName}</td>
                                            <td className="px-3 py-2 font-mono text-xs">
                                                {game.host.slice(0, 8)}...{game.host.slice(-4)}
                                            </td>
                                            <td className="px-3 py-2">{game.totalFund} $</td>
                                            <td className="px-3 py-2">
                                                {game.isFinished ? (
                                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Finished</span>
                                                ) : (
                                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Ongoing</span>
                                                )}
                                            </td>
                                        </tr>
                                        {expandedRow === game._id && (
                                            <tr>
                                                <td colSpan={5} className="bg-gray-50 px-3 py-4 border-t border-b border-gray-200">
                                                    <div className="space-y-2">
                                                        <div>
                                                            <span className="font-semibold">ID:</span> {game.idGame}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Name:</span> {game.gameName}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Host:</span> {game.host}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Fund:</span> {game.totalFund} $
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Status:</span> {game.isFinished ? "Finished" : "Ongoing"}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Winner:</span> {game.winner ? game.winner : "-"}
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold">Description:</span> {game.description || "-"}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination Controls */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button
                            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            onClick={() => {
                                setPage((p) => Math.max(1, p - 1));
                                setExpandedRow(null);
                            }}
                            disabled={page === 1}
                        >
                            Prev
                        </button>
                        <span className="text-sm text-gray-700">
                            Page {page} / {totalPages}
                        </span>
                        <button
                            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            onClick={() => {
                                setPage((p) => Math.min(totalPages, p + 1));
                                setExpandedRow(null);
                            }}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default GameList;
