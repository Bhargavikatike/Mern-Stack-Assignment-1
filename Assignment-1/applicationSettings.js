//Application Settings Controller
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
//Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";
console.log(settings);
// Turn autoSave to true
settings.autoSave = true;
console.log(settings);
//  Remove the notifications setting
delete settings.notifications;
console.log(settings);
//  Freeze the settings object
Object.freeze(settings);
console.log(settings);
