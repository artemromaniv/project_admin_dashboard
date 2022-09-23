import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";


const ColorThemeToggle = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <LightModeOutlined /> : <DarkModeOutlined />}
      </ActionIcon>
    )
  }

  export default ColorThemeToggle