import React from "react";
import PropTypes from "prop-types";
function Fromis9({ name, picture, rating }) {
  //console.log(props.fav);
  return (
    <div>
      <h1>I like {name} </h1>
      <h4> {rating}/5.0 </h4>
      <img src={picture} alt="member" />
    </div>
  );
  // img tag 에는 alt 필수
}
Fromis9.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
const fromis_9 = [
  {
    id: 1,
    name: "Sarom",
    image:
      "https://w.namu.la/s/40cc3b00433f49ea71c7750e7fdb29dafd5a1e3a01f3f42e26606d826072f543a125b2a3cda560851c7d6807e413859cf5943a1349f3ab5872a22254210c9d0eee0aad879b344cf7f9ddc1fd3704dccb452e2212feee1aa0814fbb01d93cc348085ea59186e5247662a81687f34707db",
    rating: 5.0,
  },
  {
    id: 2,
    name: "Hayong",
    image:
      "https://w.namu.la/s/659a9750a26f278d20e6e8a665126a9c969b0fbe51fb24875ef512b92b336840c2c9473c0f559e989ea0a96639d9464400a4594aefcd1a538602f29a5cd3ceec653a24d419d631ee4dc94291bcfc4e00621ecc7b88acf82234d2a19ec85e6277cdff942680105700e53b56443349b482",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Guri",
    image:
      "https://w.namu.la/s/68ee7a031bf983bb4ec053c0f23d8fca84906f5b1f370400c762e9ecbadd27ba866d41cb304d3ead85e3a8df160a2a23ee286ff8e430c23a4d564c0cecc121ee009f0807fa8492d2d94bc797898c991076df7d12c0830e60c1b62461a46240d848a96b93695a67e65df414ee7da72e53",
    rating: 5.0,
  },
  {
    id: 4,
    name: "Jiwon",
    image:
      "https://w.namu.la/s/5ba7bc07cf383b60ec8978284a156f5cbb6284527f1537062a4c1f065f8917ed64ad00bef541d686d1c55b1c3e0db17b2779540ffbd2fefe52a0cc312ebc685976aadd40fac0fd43be519aff1bdbbbb53f2035d391ed8787693fef1bdf8249744465a1a77c5d760370eca67296b56620",
    rating: 5.0,
  },
  {
    id: 5,
    name: "Jisun",
    image:
      "https://w.namu.la/s/c96e0e22d2a4a846dd76e2ddd07fcc567008304bc197fa4f158d74380c7741d65fce39a502da991c2bcd69ee38c91dcf09c1fb0c2280ef65bd5f0f1e3ec26162b4a96e9674dc3b57c64d10b15c0d8898ef21ca8b2be8658fe6c20e51e903d1a422b115db4eac7e55ecaf961bd9513d65",
    rating: 5.0,
  },
  {
    id: 6,
    name: "Seoyoen",
    image:
      "https://w.namu.la/s/e20697470828c68f51ae67f04388da30d62596cbe810a1d8cadf14b20627e69394a55d58333dffb8f88ba462deb994567c5361198becd24f0e408ed432f99dd31a9dc8a5136723bc0bd897819926d689dd3b04c945fbe93506b853a74efcd963426646832f0bf2b8c8a3bfb47fb5fbde",
    rating: 5.0,
  },
  {
    id: 7,
    name: "Cheyong",
    image:
      "https://w.namu.la/s/00b18beec69a57e319c440229eabd97ef3497518a8c7d620f7da8f9fbec2411e4d6559701c7e81afa481ce00b33dddc3e32ac08ee30ae620e9028c281cf4577901731ad21eefb1753bf91f98a7cb31cb7b2404f220106ab9e9224dba47a9d6454bf7cc124a4ada56176d270dd6389047",
    rating: 5.0,
  },
  {
    id: 8,
    name: "Nagyong",
    image:
      "https://w.namu.la/s/bcb032578c1eaa7b27ddfe04820fd4f8dfd6bcc08963b856d7ebb524dec58b3853ce66953a36e4b28cb49d63d1005d3f89badd1c125f8c3a3dd744cf4f333e08a38e362a86f3e090306b7216e50d57be7aa6e6c6565c6a5c3ad66dfa8e67e57d7a4a688f7e3182dc4902786a68ef94b6",
    rating: 5.0,
  },
  {
    id: 9,
    name: "Jihun",
    image:
      "https://w.namu.la/s/ce0406c98703dcb9b909a5561aed27860eeeda4ed3e47eb49f6060242ede31e1f88813297c703e00478d6efb7e10952643d4969951ab4aa2617e6eac7eb0edc67726cfc1d98888c58c2ec0f8f43987101b1e67fad4682d4c0c70eb01319dec4d0542a47859e943a79fabef60c736b70e",
    rating: 5.0,
  },
];
function App() {
  return (
    <div>
      {fromis_9.map((member) => (
        <Fromis9
          key={member.id}
          name={member.name}
          picture={member.image}
          rating={member.rating}
        />
      ))}
    </div>
  );
}

export default App;
