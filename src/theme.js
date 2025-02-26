const bgCol = "white";

export const Container = {
  fontWeight: "400",
};

export const FormContainer = {
  textAlign: "center",
  margin: "0 0",
};

export const FormSection = {
  position: "relative",
  marginBottom: "20px",
  backgroundColor: bgCol,
  padding: "35px 40px",
  textAlign: "left",
  display: "inline-block",
  minWidth: "380px",
  borderRadius: "6px",
  boxShadow: "1px 1px 4px 0 rgba(0,0,0,0.15)",
};

export const FormField = {
  marginBottom: "22px",
};

export const SectionHeader = {
  color: "#555",
  marginBottom: "30px",
  fontSize: "18px",
  fontWeight: "500",
};

export const SectionBody = {
  marginBottom: "30px",
};

export const SectionFooter = {
  fontSize: "14px",
  color: "#708294",
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "flex-start",
};

export const SectionFooterPrimaryContent = {
  marginLeft: "auto",
};

export const SectionFooterSecondaryContent = {
  marginRight: "auto",
  alignSelf: "center",
};

export const Input = {
  display: "block",
  width: "100%",
  padding: "16px",
  fontSize: "14px",
  fontFamily: "inherit",
  color: "#152939",
  backgroundColor: "#fff",
  backgroundImage: "none",
  border: "1px solid #C4C4C4",
  borderRadius: "3px",
  boxSizing: "border-box",
  marginBottom: "10px",
};

export const Button = {
  display: "inline-block",
  marginBottom: "0",
  fontSize: "12px",
  fontWeight: 800,
  borderRadius: "0.25em",
  lineHeight: "1.42857143",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  userSelect: "none",
  backgroundImage: "none",
  color: "##000000",
  backgroundColor: "#000000;",
  borderColor: "#ccc",
  textTransform: "uppercase",
  padding: "1em 1em",
  letterSpacing: "1.1px",
  border: "none",
};

export const SignInButton = {
  position: "relative",
  width: "100%",
  borderRadius: "4px",
  marginBottom: "10px",
  cursor: "pointer",
  padding: 0,
  fontFamily: "Amazon Ember",
  color: "#fff",
  fontSize: "14px",
  "#google_signin_btn": {
    backgroundColor: "#4285F4",
    fontFamily: "Roboto",
    border: "1px solid #4285F4",
  },
  "#facebook_signin_btn": {
    backgroundColor: "#4267B2",
    borderColor: "#4267B2",
  },
  "#amazon_signin_btn": {
    backgroundColor: "#000000;",
    border: "none",
  },
};

export const SignInButtonIcon = {
  position: "absolute",
  left: 0,
  "#google_signin_btn_icon": {
    backgroundColor: "#fff",
    borderRadius: "4px 0 0 4px",
    height: "30px",
    width: "30px",
    padding: "11px",
  },
  "#facebook_signin_btn_icon": {
    height: "33px",
    width: "18px",
    padding: "10px 14px",
  },
  "#amazon_signin_btn_icon": {
    padding: "10px",
    height: "32px",
    width: "32px",
  },
};

export const SignInButtonContent = {
  display: "block",
  padding: "18px 0",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
};

export const Strike = {
  width: "100%",
  textAlign: "center",
  borderBottom: "1px solid #bbb",
  lineHeight: "0.1em",
  margin: "32px 0",
  color: "#828282",
};

export const StrikeContent = {
  background: "#fff",
  padding: "0 25px",
  fontSize: "14px",
  fontWeight: "500",
};

export const ActionRow = {
  marginBottom: "15px",
};

export const FormRow = {
  marginBottom: "12px",
};

export const A = {
  color: "#000000;",
  cursor: "pointer",
};

export const Hint = {
  color: "#828282",
  fontSize: "12px",
};

export const Radio = {
  marginRight: "18px",
  verticalAlign: "bottom",
};

export const InputLabel = {
  color: "#8596a6",
  fontSize: "14px",
  marginBottom: "8px",
};

const Bootstrap = {
  container: Container,
  formContainer: FormContainer,
  formSection: FormSection,
  formField: FormField,

  sectionHeader: SectionHeader,
  sectionBody: SectionBody,
  sectionFooter: SectionFooter,
  sectionFooterPrimaryContent: SectionFooterPrimaryContent,
  sectionFooterSecondaryContent: SectionFooterSecondaryContent,

  input: Input,
  button: Button,
  signInButton: SignInButton,
  signInButtonIcon: SignInButtonIcon,
  signInButtonContent: SignInButtonContent,
  formRow: FormRow,
  strike: Strike,
  strikeContent: StrikeContent,
  actionRow: ActionRow,
  a: A,

  hint: Hint,
  radio: Radio,
  inputLabel: InputLabel,
};

export default Bootstrap;
