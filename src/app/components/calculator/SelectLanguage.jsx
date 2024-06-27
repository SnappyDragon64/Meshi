import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/shadcn/Select.jsx";


const SelectLanguage = ({selectedLanguage, onLanguageChange}) => {
  return (
    <Select value={selectedLanguage} onValueChange={onLanguageChange}>
      <SelectTrigger className="min-w-28">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem key="english" value="english">English</SelectItem>
        <SelectItem key="romaji" value="romaji">Romaji</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectLanguage