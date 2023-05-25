import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const CARD_HEIGHT = height / 3;
const CARD_WIDTH = width - 40;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },

  inputLoginBox: {
    width: width * 0.75,
    borderWidth: 1,
    height: height * 0.05,
    borderColor: "#BBE0C4",
    borderRadius: 32,
    paddingRight: 16,
    alignSelf: "center",
    textAlign: "center",
    gap: 2,
  },

  buttonStartLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.7,
    gap: 10,
    height: height * 0.07,
    backgroundColor: "#2A6438",
    alignSelf: "center",
    borderRadius: 32,
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,
  },

  loginBoxView : {justifyContent: 'center',alignItems:'center',paddingTop:20},

  header: { paddingTop: "10%" },

  headerText: {
    color: "#2A6438",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: "5%",
    lineHeight: 30,
    paddingVertical: "5%",
  },
  descriptionText: {
    color: "#2A6438",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "normal",
    paddingLeft: "5%",
    paddingTop: "2%",
  },
  backgroundLogin: {
    flex: 1,
    background:
      " linear-gradient(180deg, rgba(51, 73, 96, 0) 0%, rgba(51, 73, 96, 0.102039) 33.55%, rgba(51, 73, 96, 0.771009) 42.21%, rgba(51, 73, 96, 0.9) 70.57%, #334960 100%)",
  },
  productPressable: {
    flexDirection: "row",
    padding: 20,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 12,
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 70,
    marginRight: 20 / 2,
  },
  productTitle: { fontSize: 20, fontWeight: "700" },
  productType: { fontSize: 14, opacity: 0.8, color: "#0099cc" },

  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },

  filterButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    position: "absolute",
    width: 44,
    height: "25%",
    left: 2,
    top: 10,
    filter: "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.13))",
    borderRadius: 10,
    flex: 0,
    order: 5,
    flexGrow: 0,
    zIndex: 5,
  },
  bubble: {
    flex: 0,
    flexDirection: "row",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 60,
    maxWidth: 60,
    minHeight: 60,
    maxHeight: 60,
    zIndex: 5,
    marginBottom: 10,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 5,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    justifyContent: "center",
  },

  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent",
  },
  bottomBarContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  scrollContainer: {
    shadowColor: "#6A6C6E",
    shadowOffset: {
      width: 10,
      height: -10,
    },
    shadowOpacity: 1,
  },

  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  normalDots: {
    width: 8,
    height: 8,
    borderRadius: 4,

    marginHorizontal: 4,
  },
  textAreaContainer: {
    width: "100%",
    marginBottom: 10,
  },
  textView: {
    position: "absolute",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    width: "100%",
  },
  productDetailTitle: {
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    paddingTop: "5%",
    paddingLeft: "5%",
    color: "#2A6438",
  },
  containerText: {
    padding: 20,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    flex: 2,
    backgroundColor: "#efefef",
  },
  productDetailSubtitle: {
    fontSize: 17,
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: "5%",
    color: "#2A6438",
  },
  productDetailText: {
    fontSize: 15,
    paddingLeft: "5%",
    color: "#808080",
    paddingTop: "1%",
  },
  productDetailViewImage: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  productDetailImage: { width: "99%", height: "90%", resizeMode: "cover" },
});
