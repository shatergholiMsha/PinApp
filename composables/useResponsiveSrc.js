export default function useResponsiveSrc(images) {
    const responsive = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1
    if (responsive > 2 && images["474x"]) return images["474x"].url
    if (responsive >= 1 && images["236x"]) return images["236x"].url
    return images["170x"]?.url || images["236x"]?.url || images["736x"].url
}
