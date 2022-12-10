const connection = require('../util/database')


const getEvents = async (req, res, next) => {
    connection.query('SELECT * FROM evenements', (error, data, fields) => {
      if (error) res.status(500).send(error)
      else res.status(200).json(data)
    })
  }

  const getEventById = async (req, res, next) => {
    const id = req.params.id
    connection.query(
      'SELECT * FROM evenements where id =?',
      [id],
      (error, data, fields) => {
        if (error) res.status(500).send(error)
        else res.status(200).json(data)
      },
    )
  } 
  const updateEvent = async (req, res) => {
    const id = req.params.id
    const {nom,type,lieu,date_event,description,id_formateur} = req.body
    connection.query(
      'UPDATE `evenements` SET `nom`=? , `type`=?,`lieu`=?,`date_event`=?,`description`=?,`id_formateur`=?  WHERE id = ?',
      [nom,type,lieu,date_event,description,id_formateur,id],
      (err, data, fields) => {
        if (err) res.status(500).send(err)
        else
          res.status(200).send({ msg: 'evenement modifié avec succés' })
      },
    )
  }

  const addEvent = async (req, res) => {
    const {nom,type,lieu,date_event,description,id_formateur} = req.body
    connection.query(
      'INSERT INTO `evenements`(`nom`,`type`,`lieu`,`date_event`,`description`,`id_formateur`) VALUES (?,?,?,?,?,?)',
      [nom,type,lieu,date_event,description,id_formateur],
      (err, data, fields) => {
        if (err) res.status(500).send(err)
        else res.status(200).send({ msg: 'Evenement Ajouté avec succés' })
      },
    )
  }

  const deleteEvent = async (req, res) => {
    const id = req.params.id
    connection.query(
      'DELETE FROM evenements where id =?',
      [id],
      (err, data, fields) => {
        if (err) res.status(500).send(err)
        else res.status(200).send({ msg: 'Evenement de jeux  supprimé' })
      },
    )
  }

  module.exports = {
    addEvent,
    getEventById,
    getEvents,
    updateEvent,
    deleteEvent
  }