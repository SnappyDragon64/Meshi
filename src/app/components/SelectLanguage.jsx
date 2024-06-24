import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/Select";


const SelectLanguage = ({selectedLanguage, onLanguageChange}) => {
  return (
    <Select  value={selectedLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder="Theme"/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem key="english" value="english">English</SelectItem>
        <SelectItem key="romaji" value="romaji">Romaji</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectLanguage