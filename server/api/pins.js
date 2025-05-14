import { BASE_API_URL } from "@/config/api.js"

export default defineEventHandler(async (event) => {
    const { q, bookmark = "" } = getQuery(event)
  
    if (!q) {
      return { pins: [], bookmark: null }
    }
  
    const url = `${BASE_API_URL}?q=${encodeURIComponent(q)}&limit=10&bookmark=${encodeURIComponent(bookmark)}`
  
    try {
      const data = await $fetch(url)
      return data
    } catch (error) {
      console.error("Error fetching pins", error)
      return { pins: [], bookmark: null, error: true }
    }
  })
  