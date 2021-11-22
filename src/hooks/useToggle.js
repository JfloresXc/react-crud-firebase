import { useState, useCallback } from "react"

export const useToggle = (defaultValue = false) => {
    const [value, setToggleValue] = useState(defaultValue)

    const toggle = useCallback(() => {
        setToggleValue(value => !value)
    }, [setToggleValue])

    return [value, toggle]
}