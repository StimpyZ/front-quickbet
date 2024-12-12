'use client'

import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { InternalGenres } from "../../domain/genres/InernalGenres.interface";
import { fetchGenres } from "../../infraestructure/repositories/genres-repositorie";

export default function useFilterSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const {data: genresData, isLoading: isLoadingGenres } = useQuery<InternalGenres, Error>({
    queryKey: ['genres'],
    queryFn: () => fetchGenres({ endpoint: '/genre/movie/list' }),
    staleTime: 5 * 60 * 1000 // 5 minutes
  });
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return {
    isOpen,
    sidebarRef,
    genresData,
    isLoadingGenres,
    toggleSidebar,
  }
}
