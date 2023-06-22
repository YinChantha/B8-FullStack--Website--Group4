"use client";

// import React from "react";
// import Link from "next/link";
// import { withRouter } from "next/router";
import { useRouter } from "next/navigation";
import { AllPostItems } from "../AllPostsItems";

export const getStaticPaths = async () => {
  const res = await fetch('');
  const data = res.json();

  const paths = AllPostItems.map((post) => {
    return {
      params: { id: post.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }

}

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = fetch('');
//   const post = AllPostItems.find(post => post.id === id);
// }

const ArtPostDetails = ({paths}) => {
  const router = useRouter();
  const { id } = router.query;
  
  const res = AllPostItems.find(post => post.id === id);
  console.log("post", res);
  

  return (
    <>
      <div>
        <h2>Post Detals</h2>
        <p >Post id : {id}</p>

      </div>
    </>
  );
};

// export default withRouter(PostDetails);
export default ArtPostDetails;
