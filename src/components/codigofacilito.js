import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
            data {
                certificates {
                    code
                    title
                    score
                }
                courses {
                    progress
                    title
                    url
                }
            }
        }
    }`)
    
    console.log(data)

    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center"> Mis certificados online en CodigoFacilito</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.certificates.map(certificate => (
                                <div className="shadow p-4 bg-white mr-4">
                                    <h4 className="font-bold">{certificate.title}</h4>
                                    <p className="inline-block text-indigo-700">Calificacion: {certificate.score}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center"> Mis cursos en progreso</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.courses.map(course => (
                                <div className="shadow p-4 bg-white mr-4">
                                    <h4 className="font-bold">
                                        <a href={course.url} target="_blank" >{course.title}</a>
                                    </h4>
                                    <p className="inline-block text-indigo-700">Progeso: {parseInt(course.progress)}%</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>


    );
};